import { ICreateCoinDTO } from "@modules/coin/dtos/ICreateCoinDTO";
import { ICoinsRepository } from "@modules/coin/repositories/ICoinRepository";
import { Coin } from "@modules/coin/entities/Coin";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateCoinUseCase {
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

        if (isFiat) {
            // Bussiness Rule: Should not create a new fiat coin if country is empty
            if (!country) {
                throw new AppError("Country is required for fiat coins!");
            }

            // Bussiness Rule: Should not create a new fiat coin if firstHistoricalData is filled
            if (firstHistoricalData) {
                throw new AppError(
                    "First historical data is not required for fiat coins!"
                );
            }

            // Bussiness Rule: Should not create a new fiat coin if lastHistoricalData is filled
            if (lastHistoricalData) {
                throw new AppError(
                    "Last historical data is not required for fiat coins!"
                );
            }
        }

        if (!isFiat) {
            // Bussiness Rule: Should not create a new fiat coin if country is empty
            if (country) {
                throw new AppError(
                    "Country is not required for non-fiat coins!"
                );
            }

            // Bussiness Rule: Should not create a new fiat coin if firstHistoricalData is filled
            if (!firstHistoricalData) {
                throw new AppError(
                    "First historical data is required for non-fiat coins!"
                );
            }
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
        });

        return coin;
    }
}
