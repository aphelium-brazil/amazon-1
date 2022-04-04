import { CoinRepositoryInMemory } from "@modules/coin/repositories/in-memory/CoinRepositoryInMemory";
import { SwapsRepositoryInMemory } from "@modules/swap/repositories/in-memory/SwapsRepositoryInMemory";

import { SwapCoinsUseCase } from "./SwapCoinsUseCase";

let swapCoinsUseCase: SwapCoinsUseCase;
let swapsRepositoryInMemory: SwapsRepositoryInMemory;
let coinsRepositoryInMemory: CoinRepositoryInMemory;

describe("create swap between two cryptos", () => {
    beforeEach(() => {
        swapsRepositoryInMemory = new SwapsRepositoryInMemory();
        coinsRepositoryInMemory = new CoinRepositoryInMemory();
        swapCoinsUseCase = new SwapCoinsUseCase(
            swapsRepositoryInMemory,
            coinsRepositoryInMemory
        );
    });

    it("should create a swap between two cryptos", async () => {
        const swap = await swapsRepositoryInMemory.create({
            name: "BTCDOGE",
            isActive: true,
        });

        const bitcoin = await coinsRepositoryInMemory.create({
            name: "string",
            isFiat: false,
            description: "string",
            logo: "string",
            symbol: "string",
            isActive: true,
            firstHistoricalData: "string",
            lastHistoricalData: "string",
        });

        const brl = await coinsRepositoryInMemory.create({
            name: "string",
            isFiat: true,
            country: "BR",
            description: "string",
            logo: "string",
            symbol: "string",
            isActive: true,
        });

        const swapCryptos = await swapCoinsUseCase.execute({
            swapId: swap.id,
            fromId: bitcoin.id,
            toId: brl.id,
        });

        expect(swap).toHaveProperty("coins");
        expect(swap.coins.length).toBe(2);
    });
});
