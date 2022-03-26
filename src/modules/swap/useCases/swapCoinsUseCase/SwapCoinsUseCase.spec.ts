import { SwapsRepositoryInMemory } from "@modules/swap/repositories/in-memory/SwapsRepositoryInMemory";
import { CoinRepositoryInMemory } from "@modules/coin/repositories/in-memory/CoinRepositoryInMemory";
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
            country: "BR",
            description: "string",
            logo: "string",
            symbol: "string",
            isActive: true,
            firstHistoricalData: "string",
            lastHistoricalData: "string",

            platformName: "string",
            platformDescription: "string",
            platformTokenAddress: "string",

            websiteName: "string",
            websiteDescription: "string",
            websiteUrl: "string",

            sourceCodeName: "string",
            sourceCodeUrl: "string",

            techDocName: "string",
            techDocDescription: "string",
            techDocFile: "string",
            techDocUrl: "string",
            techDocCreatedAt: new Date(1647966991),
            techDocUpdatedAt: new Date(1647966991),

            categoryName: "string",
            categoryDescription: "string",
        });

        const doge = await coinsRepositoryInMemory.create({
            name: "string",
            isFiat: false,
            country: "BR",
            description: "string",
            logo: "string",
            symbol: "string",
            isActive: true,
            firstHistoricalData: "string",
            lastHistoricalData: "string",

            platformName: "string",
            platformDescription: "string",
            platformTokenAddress: "string",

            websiteName: "string",
            websiteDescription: "string",
            websiteUrl: "string",

            sourceCodeName: "string",
            sourceCodeUrl: "string",

            techDocName: "string",
            techDocDescription: "string",
            techDocFile: "string",
            techDocUrl: "string",
            techDocCreatedAt: new Date(1647966991),
            techDocUpdatedAt: new Date(1647966991),

            categoryName: "string",
            categoryDescription: "string",
        });

        const swapCryptos = await swapCoinsUseCase.execute({
            swapId: swap.id,
            fromId: bitcoin.id,
            toId: doge.id,
        });

        expect(swap).toHaveProperty("coins");
        expect(swap.coins.length).toBe(2);
    });
});
