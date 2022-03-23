import { ICreateCryptocurrencyDTO } from "@modules/cryptocurrencies/dtos/ICreateCryptocurrencyDTO";
import { ICryptocurrencyRepository } from "@modules/cryptocurrencies/repositories/ICryptocurrencyRepository";
import { getRepository, Repository } from "typeorm";
import { Cryptocurrency } from "../entities/Cryptocurrency";

class CryptocurrenciesRepository implements ICryptocurrencyRepository {
    private repository: Repository<Cryptocurrency>;

    constructor() {
        this.repository = getRepository(Cryptocurrency);
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
        const cryptocurrency = this.repository.create({
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

        await this.repository.save(cryptocurrency);
        return cryptocurrency;
    }
}

export { CryptocurrenciesRepository };
