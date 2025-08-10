import { createServer as createDNSServer, Packet } from 'dns2';

const dnsServer = createDNSServer({
    tcp: true,
    udp: true,
    handle: (request, send, rinfo) => {
        const [ question ] = request.questions;
        const { name, type } = question;

        const response = Packet.createResponseFromRequest(request);

        if (type === Packet.TYPE.A && name === 'example.com') {
            response.answers.push({
                name,
                type: Packet.TYPE.A,
                class: Packet.CLASS.IN,
                ttl: 300,
                address: '203.0.113.42',
            });
        }

        send(response);
    }
});

dnsServer.listen({
    tcp: {
        address: '::',
        port: 5333,

    },
    udp: {
        address: '::',
        port: 5333,
    }
});
console.log('DNS server running on port 53');
