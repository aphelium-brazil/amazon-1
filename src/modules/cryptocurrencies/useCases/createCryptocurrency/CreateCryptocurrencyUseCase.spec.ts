import { CryptocurrenciesRepositoryInMemory } from "@modules/cryptocurrencies/repositories/in-memory/CryptocurrenciesRepositoryInMemory";
import { CreateCryptocurrencyUseCase } from "./CreateCryptocurrencyUseCase";

describe("Create cryptocurrency", () => {
    let createCryptocurrencyUseCase: CreateCryptocurrencyUseCase;
    let cryptocurrenciesRepositoryInMemory: CryptocurrenciesRepositoryInMemory;

    beforeEach(() => {
        cryptocurrenciesRepositoryInMemory =
            new CryptocurrenciesRepositoryInMemory();
        createCryptocurrencyUseCase = new CreateCryptocurrencyUseCase(
            cryptocurrenciesRepositoryInMemory
        );
    });

    it("should create a cryptocurrency", async () => {
        const cryptocurrency = await createCryptocurrencyUseCase.execute({
            name: "string",
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

        expect(cryptocurrency).toHaveProperty("id");
    });
});
