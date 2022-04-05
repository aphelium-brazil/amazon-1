import { IUpdateCoinDTO } from "@modules/coin/dtos/IUpdateCoinDTO";
import { Coin } from "@modules/coin/entities/Coin";
import { ICoinsRepository } from "@modules/coin/repositories/interfaces/ICoinRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class UpdateCoinUseCase {
    constructor(
        @inject("CoinsRepository")
        private coinsRepository: ICoinsRepository
    ) {}

    async execute({
        id,
        name,
        isFiat,
        country,
        description,
        logo,
        symbol,
        isActive,
        firstHistoricalData,
        lastHistoricalData,
    }: IUpdateCoinDTO): Promise<Coin> {
        // Bussiness Rule: Should not create a new coin if it already exists one with the same name.
        const coinExists = await this.coinsRepository.findByIds([id]);

        if (!coinExists[0]) {
            throw new AppError("Coin not found!");
        }

        if (coinExists[0]) {
            if (isFiat === true && coinExists[0].isFiat === false) {
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

            if (isFiat === false && coinExists[0].isFiat === true) {
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
        }

        const coin = await this.coinsRepository.update({
            id,
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
