import { BrokerRepositoryInMemory } from "@modules/brokers/repositories/in-memory/BrokerRepositoryInMemory";
import { SwapsRepositoryInMemory } from "@modules/swap/repositories/in-memory/SwapsRepositoryInMemory";
import { CreateSwapUseCase } from "@modules/swap/useCases/createSwapUseCase/CreateSwapUseCase";

import { CreateBrokerUseCase } from "../createBroker/CreateBrokerUseCase";
import { SwapAvailableInBrokerUseCase } from "./SwapAvailableInBrokerUseCase";

describe("include swap in brokers", () => {
    let createBrokerUseCase: CreateBrokerUseCase;
    let brokerRepositoryInMemory: BrokerRepositoryInMemory;

    let createSwapUseCase: CreateSwapUseCase;
    let swapsRepositoryInMemory: SwapsRepositoryInMemory;

    let swapAvailableInBrokerUseCase: SwapAvailableInBrokerUseCase;

    beforeEach(() => {
        brokerRepositoryInMemory = new BrokerRepositoryInMemory();
        createBrokerUseCase = new CreateBrokerUseCase(brokerRepositoryInMemory);

        swapsRepositoryInMemory = new SwapsRepositoryInMemory();
        createSwapUseCase = new CreateSwapUseCase(swapsRepositoryInMemory);

        swapAvailableInBrokerUseCase = new SwapAvailableInBrokerUseCase(
            swapsRepositoryInMemory,
            brokerRepositoryInMemory
        );
    });

    it("should include some swaps into the brokers", async () => {
        const broker = await createBrokerUseCase.execute({
            name: "Binance",
            description: "Chinese broker",
            slug: "String",
            logo: "String",
            dateLaunched: new Date(1647966991),
        });

        const swapOne = await createSwapUseCase.execute({
            name: "BTCBRL",
            isActive: true,
        });

        const swapTwo = await createSwapUseCase.execute({
            name: "BTCBRL",
            isActive: true,
        });

        const swapsBroker = await swapAvailableInBrokerUseCase.execute({
            brokerId: broker.id,
            swaps: [swapOne.id, swapTwo.id],
        });

        expect(broker.swaps).toHaveLength(2);
    });
});
