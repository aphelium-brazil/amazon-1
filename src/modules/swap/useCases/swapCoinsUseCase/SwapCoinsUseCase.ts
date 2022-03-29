import { ICoinsRepository } from "@modules/coin/repositories/ICoinRepository";
import { Coin } from "@modules/coin/typeorm/entities/Coin";
import { ICreateSwapRelationDTO } from "@modules/swap/dtos/ICreateSwapRelationDTO";
import { ISwapsRepository } from "@modules/swap/repositories/ISwapsRepository";
import { Swap } from "@modules/swap/typeorm/entities/Swap";
import { inject, injectable } from "tsyringe";

@injectable()
class SwapCoinsUseCase {
    constructor(
        @inject("SwapsRepository")
        private swapsRepository: ISwapsRepository,
        @inject("CoinsRepository")
        private coinsRepository: ICoinsRepository
    ) {}

    async execute({
        swapId,
        fromId,
        toId,
    }: ICreateSwapRelationDTO): Promise<Swap> {
        const swapExists = await this.swapsRepository.findByIds([swapId]);

        const coins = await this.coinsRepository.findByIds([fromId, toId]);

        swapExists[0].updatedAt = new Date();
        swapExists[0].coins = coins;

        await this.swapsRepository.create(swapExists[0]);

        return swapExists[0];
    }
}

export { SwapCoinsUseCase };