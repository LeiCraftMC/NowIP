import { createServer as createDNSServer, Packet } from 'dns2';

interface DNSRecord {
    name: string;
    type: number;
    class: number;
    ttl: number;
    [key: string]: any;
}

class DNSRecordDB {
    private records: Map<string, Map<number, DNSRecord[]>> = new Map();

    // Add a DNS record
    addRecord(record: DNSRecord): void {
        const normalizedName = record.name.toLowerCase();

        if (!this.records.has(normalizedName)) {
            this.records.set(normalizedName, new Map());
        }

        const domainRecords = this.records.get(normalizedName)!;

        if (!domainRecords.has(record.type)) {
            domainRecords.set(record.type, []);
        }

        domainRecords.get(record.type)!.push({ ...record });
    }

    // Get records for a specific name and type
    getRecords(name: string, type: number): DNSRecord[] {
        const normalizedName = name.toLowerCase();

        if (!this.records.has(normalizedName)) {
            return [];
        }

        const domainRecords = this.records.get(normalizedName)!;

        if (!domainRecords.has(type)) {
            return [];
        }

        return [...domainRecords.get(type)!];
    }

    getAllRecords(name: string): DNSRecord[] {
        const normalizedName = name.toLowerCase();

        if (!this.records.has(normalizedName)) {
            return [];
        }

        const domainRecords = this.records.get(normalizedName)!;
        const allRecords: DNSRecord[] = [];

        for (const records of domainRecords.values()) {
            allRecords.push(...records);
        }

        return allRecords;
    }

    // Remove a record based on a matcher function
    removeRecord(name: string, type: number, matcher: (record: DNSRecord) => boolean): boolean {
        const normalizedName = name.toLowerCase();

        if (!this.records.has(normalizedName)) {
            return false;
        }

        const domainRecords = this.records.get(normalizedName)!;

        if (!domainRecords.has(type)) {
            return false;
        }

        const typeRecords = domainRecords.get(type)!;
        const initialLength = typeRecords.length;

        domainRecords.set(type, typeRecords.filter(record => !matcher(record)));

        return domainRecords.get(type)!.length < initialLength;
    }

    // Remove all records for a domain
    removeDomain(name: string): boolean {
        return this.records.delete(name.toLowerCase());
    }
}

// Create a global instance
const dnsRecordDB = new DNSRecordDB();

// Add some example records
dnsRecordDB.addRecord({
    name: 'example.com',
    type: Packet.TYPE.A,
    class: Packet.CLASS.IN,
    ttl: 300,
    address: '203.0.113.42'
});



const dnsServer = createDNSServer({
    tcp: true,
    udp: true,
    handle: (request, send, rinfo) => {
        const [question] = request.questions;
        const { name, type } = question;

        const response = Packet.createResponseFromRequest(request);

        response.answers.push(...dnsRecordDB.getRecords(name, type));

        send(response);
    }
});

// dnsServer.listen({
//     tcp: 16033,
//     udp: 16033
// });


dnsServer.listen({
    tcp: {
        address: '::',
        port: 53
    },
    udp: {
        address: '::',
        port: 53
    }
});

dnsServer.on('request', (request, response, rinfo) => {
    console.log(request.header.id, request.questions[0]);
});

dnsServer.on('requestError', (error) => {
    console.log('Client sent an invalid request', error);
});

dnsServer.on('listening', () => {
    console.log('DNS server running on', dnsServer.addresses());
});

dnsServer.on('close', () => {
    console.log('server closed');
});
