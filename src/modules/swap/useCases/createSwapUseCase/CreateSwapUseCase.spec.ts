import { SwapsRepositoryInMemory } from "@modules/swap/repositories/in-memory/SwapsRepositoryInMemory";

import { CreateSwapUseCase } from "./CreateSwapUseCase";

let createSwapUseCase: CreateSwapUseCase;
let swapsRepositoryInMemory: SwapsRepositoryInMemory;

describe("create a swap", () => {
    beforeEach(() => {
        swapsRepositoryInMemory = new SwapsRepositoryInMemory();
        createSwapUseCase = new CreateSwapUseCase(swapsRepositoryInMemory);
    });
    it("should create a swap", async () => {
        const swap = await createSwapUseCase.execute({
            name: "BTCBRL",
            isActive: true,
        });

        expect(swap).toHaveProperty("id");
    });
});
