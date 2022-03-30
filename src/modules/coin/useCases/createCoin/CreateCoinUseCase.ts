import { ICreateCoinDTO } from "@modules/coin/dtos/ICreateCoinDTO";
import { ICoinsRepository } from "@modules/coin/repositories/ICoinRepository";
import { Coin } from "@modules/coin/typeorm/entities/Coin";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
@injectable() export 
class CreateCoinUseCase {
    constructor(
        @inject("CoinsRepository")
        private coinRepository: ICoinsRepository
    ) {}

    async execute({
        name,
        isFiat,
        country,
        description,
        logo,
        symbol,
        isActive,
        firstHistoricalData,
        lastHistoricalData,
        platformName,
        platformDescription,
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
    }: ICreateCoinDTO): Promise<Coin> {
        // Bussiness Rule: Should not create a new coin if it already exists one with the same name.
        const coinNameAlreadyExists = await this.coinRepository.findByName(
            name
        );

        if (coinNameAlreadyExists) {
            throw new AppError("Coin name already exists!");
        }

        // Bussiness Rule: Should not create a new coin if it already exists one with the same symbol.
        const coinSymbolAlreadyExists = await this.coinRepository.findBySymbol(
            symbol
        );

        if (coinSymbolAlreadyExists) {
            throw new AppError("Coin symbol already exists!");
        }

        // Bussiness Rule: Should not create a new fiat coin if country is empty
        if (isFiat && country === null) {
            throw new AppError(
                "Country should be informed to create a fiat coin!"
            );
        }

        const coin = await this.coinRepository.create({
            name,
            isFiat,
            country,
            description,
            logo,
            symbol,
            isActive,
            firstHistoricalData,
            lastHistoricalData,
            platformName,
            platformDescription,
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

        return coin;
    }
}
