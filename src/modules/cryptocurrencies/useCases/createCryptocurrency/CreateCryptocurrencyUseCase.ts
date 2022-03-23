import { ICreateCryptocurrencyDTO } from "@modules/cryptocurrencies/dtos/ICreateCryptocurrencyDTO";
import { ICryptocurrencyRepository } from "@modules/cryptocurrencies/repositories/ICryptocurrencyRepository";
import { Cryptocurrency } from "@modules/cryptocurrencies/typeorm/entities/Cryptocurrency";

class CreateCryptocurrencyUseCase {
    constructor(private cryptocurrency: ICryptocurrencyRepository) {}

    async execute({
        name,
        description,
        logo,
        symbol,
        slug,
        sign,
        isActive,
        firstHistoricalData,
        lastHistoricalData,
        platformName,
        platformDescription,
        platformSymbol,
        platformSlug,
        platformTokenAddress,
        websiteName,
        websiteDescription,
        websiteUrl,
        sourceCodeName,
        sourceCodeUrl,
        techDocName,
        techDocDescription,
        techDocFile,
        techDocUrl,
        techDocCreatedAt,
        techDocUpdatedAt,
        categoryName,
        categoryDescription,
    }: ICreateCryptocurrencyDTO): Promise<Cryptocurrency> {
        const cryptocurrency = await this.cryptocurrency.create({
            name,
            description,
            logo,
            symbol,
            slug,
            sign,
            isActive,
            firstHistoricalData,
            lastHistoricalData,
            platformName,
            platformDescription,
            platformSymbol,
            platformSlug,
            platformTokenAddress,
            websiteName,
            websiteDescription,
            websiteUrl,
            sourceCodeName,
            sourceCodeUrl,
            techDocName,
            techDocDescription,
            techDocFile,
            techDocUrl,
            techDocCreatedAt,
            techDocUpdatedAt,
            categoryName,
            categoryDescription,
        });

        return cryptocurrency;
    }
}

export { CreateCryptocurrencyUseCase };
