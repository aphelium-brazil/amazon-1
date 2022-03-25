import { CryptocurrenciesRepositoryInMemory } from "@modules/cryptocurrencies/repositories/in-memory/CryptocurrenciesRepositoryInMemory";
import { SwapsRepositoryInMemory } from "@modules/swap/repositories/in-memory/SwapsRepositoryInMemory";
import { CreateCryptosSwapUseCase } from "./CreateCryptosSwapUseCase";

let createCryptosSwapUseCase: CreateCryptosSwapUseCase;
let swapsRepositoryInMemory: SwapsRepositoryInMemory;
let cryptocurrenciesRepositoryInMemory: CryptocurrenciesRepositoryInMemory;

describe("create swap between two cryptos", () => {
    beforeEach(() => {
        swapsRepositoryInMemory = new SwapsRepositoryInMemory();
        cryptocurrenciesRepositoryInMemory =
            new CryptocurrenciesRepositoryInMemory();
        createCryptosSwapUseCase = new CreateCryptosSwapUseCase(
            swapsRepositoryInMemory,
            cryptocurrenciesRepositoryInMemory
        );
    });

    it("should create a swap between two cryptos", async () => {
        const swap = await swapsRepositoryInMemory.create({
            name: "BTCDOGE",
            isActive: true,
        });

        const bitcoin = await cryptocurrenciesRepositoryInMemory.create({
            name: "Bitcoin",
            description: "string",
            logo: "string",
            symbol: "string",
            slug: "string",
            sign: "string",
            isActive: true,
            firstHistoricalData: "string",
            lastHistoricalData: "string",

            platformName: "string",
            platformDescription: "string",
            platformSymbol: "string",
            platformSlug: "string",
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

        const doge = await cryptocurrenciesRepositoryInMemory.create({
            name: "Doge",
            description: "string",
            logo: "string",
            symbol: "string",
            slug: "string",
            sign: "string",
            isActive: true,
            firstHistoricalData: "string",
            lastHistoricalData: "string",

            platformName: "string",
            platformDescription: "string",
            platformSymbol: "string",
            platformSlug: "string",
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

        const swapCryptos = await createCryptosSwapUseCase.execute({
            type: "CRYPTO_TO_CRYPTO",
            swapId: swap.id,
            fromId: bitcoin.id,
            toId: doge.id,
        });

        expect(swap).toHaveProperty("coins");
        expect(swap.coins.length).toBe(2);
    });
});
