import { BrokerRepositoryInMemory } from "@modules/brokers/repositories/in-memory/BrokerRepositoryInMemory";

import { AppError } from "@shared/errors/AppError";

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

    it("should not create a new broker if it already exists", async () => {
        await createBrokerUseCase.execute({
            name: "Binance",
            description: "Chinese broker",
            slug: "String",
            logo: "String",
            dateLaunched: new Date(1647966991),
        });

        await expect(
            createBrokerUseCase.execute({
                name: "Binance",
                description: "Chinese broker",
                slug: "String",
                logo: "String",
                dateLaunched: new Date(1647966991),
            })
        ).rejects.toEqual(new AppError("Broker already exists!"));
    });
});
