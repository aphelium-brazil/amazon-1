import { ICryptocurrencyRepository } from "@modules/cryptocurrencies/repositories/ICryptocurrencyRepository";
import { Cryptocurrency } from "@modules/cryptocurrencies/typeorm/entities/Cryptocurrency";
import { ICreateSwapRelationDTO } from "@modules/swap/dtos/ICreateSwapRelationDTO";
import { ISwapsRepository } from "@modules/swap/repositories/ISwapsRepository";
import { SwapCryptos } from "@modules/swap/typeorm/entities/SwapCryptos";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateCryptosSwapUseCase {
    constructor(
        @inject("SwapsCryptosRepository")
        private swapsRepository: ISwapsRepository,
        @inject("CryptocurrenciesRepository")
        private cryptocurrenciesRepository: ICryptocurrencyRepository
    ) {}

    cryptocurrenciesIds: Cryptocurrency[] = [];

    async execute({
        type,
        swapId,
        fromId,
        toId,
    }: ICreateSwapRelationDTO): Promise<SwapCryptos> {
        if (type === "CRYPTO_TO_CRYPTO") {
            const swapExists = await this.swapsRepository.findById(swapId);

            const cryptoFromId = await this.cryptocurrenciesRepository.findById(
                fromId
            );
            const cryptoToId = await this.cryptocurrenciesRepository.findById(
                toId
            );

            this.cryptocurrenciesIds.push(cryptoFromId);
            this.cryptocurrenciesIds.push(cryptoToId);
            swapExists.updatedAt = new Date();
            swapExists.coins = this.cryptocurrenciesIds;

            await this.swapsRepository.create(swapExists);

            return swapExists;
        }
    }
}

export { CreateCryptosSwapUseCase };
