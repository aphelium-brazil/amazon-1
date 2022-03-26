import { CoinRepositoryInMemory } from "@modules/coin/repositories/in-memory/CoinRepositoryInMemory";
import { CreateCoinUseCase } from "./CreateCoinUseCase";

describe("Create coin", () => {
    let createCoinUseCase: CreateCoinUseCase;
    let coinRepositoryInMemory: CoinRepositoryInMemory;

    beforeEach(() => {
        coinRepositoryInMemory = new CoinRepositoryInMemory();
        createCoinUseCase = new CreateCoinUseCase(coinRepositoryInMemory);
    });

    it("should create a coin", async () => {
        const coin = await createCoinUseCase.execute({
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

        expect(coin).toHaveProperty("id");
    });
});
