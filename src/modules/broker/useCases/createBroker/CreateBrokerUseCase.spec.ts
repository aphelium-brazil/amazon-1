import { BrokerRepositoryInMemory } from "@modules/broker/repositories/in-memory/BrokerRepositoryInMemory";
import { create } from "domain";
import { CreateBrokerUseCase } from "./CreateBrokerUseCase";

describe("Create broker", () => {
    let createBrokerUseCase: CreateBrokerUseCase;
    let brokerRepositoryInMemory: BrokerRepositoryInMemory;

    beforeEach(() => {
        brokerRepositoryInMemory = new BrokerRepositoryInMemory();
        createBrokerUseCase = new CreateBrokerUseCase(brokerRepositoryInMemory);
    });

    it("should create a new broker", async () => {
        const broker = await createBrokerUseCase.execute({
            name: "Binance",
            description: "Chinese broker",
            slug: "String",
            logo: "String",
            dateLaunched: new Date(1647966991),
        });

        expect(broker).toHaveProperty("id");
    });
});
