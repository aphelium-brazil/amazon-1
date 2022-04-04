import request from "supertest";
import { app } from "@shared/infra/http/app";

describe("CreateCoinController", () => {
    it("deve retornar 200", async () => {
        const response = await request(app).post("api/v1/coins").send({
            name: "Bitcoin",
            symbol: "BTC",
            price: "5000",
        });

        expect(response.status).toBe(200);
    });
});
