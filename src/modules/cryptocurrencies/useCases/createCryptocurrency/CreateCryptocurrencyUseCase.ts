import { ICreateCryptocurrencyDTO } from "@modules/cryptocurrencies/dtos/ICreateCryptocurrencyDTO";
import { ICryptocurrencyRepository } from "@modules/cryptocurrencies/repositories/ICryptocurrencyRepository";
import { Cryptocurrency } from "@modules/cryptocurrencies/typeorm/entities/Cryptocurrency";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
@injectable()
class CreateCryptocurrencyUseCase {
    constructor(
        @inject("CryptocurrenciesRepository")
        private cryptocurrencyRepository: ICryptocurrencyRepository
    ) {}

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
        const cryptocurrencyAlreadyExists =
            await this.cryptocurrencyRepository.findByName(name);

        if (cryptocurrencyAlreadyExists) {
            throw new AppError("Cryptocurrency already exists!");
        }

        const cryptocurrency = await this.cryptocurrencyRepository.create({
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
