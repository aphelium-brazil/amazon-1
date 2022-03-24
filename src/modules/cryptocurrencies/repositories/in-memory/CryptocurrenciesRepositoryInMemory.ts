import { ICreateCryptocurrencyDTO } from "@modules/cryptocurrencies/dtos/ICreateCryptocurrencyDTO";
import { Cryptocurrency } from "@modules/cryptocurrencies/typeorm/entities/Cryptocurrency";
import { ICryptocurrencyRepository } from "../ICryptocurrencyRepository";

class CryptocurrenciesRepositoryInMemory implements ICryptocurrencyRepository {
    cryptocurrencies: Cryptocurrency[] = [];

    async findById(id: string): Promise<Cryptocurrency> {
        return this.cryptocurrencies.find(
            (cryptocurrency) => cryptocurrency.id === id
        );
    }
    async findByName(name: string): Promise<Cryptocurrency> {
        return this.cryptocurrencies.find(
            (cryptocurrency) => cryptocurrency.name === name
        );
    }

    async create({
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
        const cryptocurrency = new Cryptocurrency();

        Object.assign(cryptocurrency, {
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

        this.cryptocurrencies.push(cryptocurrency);

        return cryptocurrency;
    }
}

export { CryptocurrenciesRepositoryInMemory };
