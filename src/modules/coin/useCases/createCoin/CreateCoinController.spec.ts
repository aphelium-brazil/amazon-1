import request from "supertest";
import { app } from "@shared/infra/http/app";

describe("CreateCoinController", () => {
    it("Should return a 201 empty response", async () => {
        const response = await request(app).post("api/v1/coins").send({
            name: "string",
            isFiat: false,
            description: "string",
            logo: "string",
            symbol: "string",
            isActive: true,
            firstHistoricalData: "string",
            lastHistoricalData: "string",
        });

        expect(response.status).toBe(201);
    });
});