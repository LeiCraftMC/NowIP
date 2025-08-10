import { describe, test, expect } from "bun:test";
import {  } from "dns2";

const resolve = UDPClient();

(async () => {
  const response = await resolve('google.com')
  console.log(response.answers);
})();

describe("DNS Server Tests", () => {
    test("should resolve A records", async () => {
        const response = await resolve("example.com", "A");
        expect(response).toEqual({
            answers: [
                {
                    name: "example.com",
                    type: "A",
                    class: "IN",
                    ttl: 300,
                    address: "203.0.113.42",
                },
            ],
        });
    });

    test("should resolve TXT records", async () => {
        const response = await resolve("example.com", "TXT");
        expect(response).toEqual({
            answers: [
                {
                    name: "example.com",
                    type: "TXT",
                    class: "IN",
                    ttl: 300,
                    data: "This is a sample TXT record",
                },
            ],
        });
    });
});
