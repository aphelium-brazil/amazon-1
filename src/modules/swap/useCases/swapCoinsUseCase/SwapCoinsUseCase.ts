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

    private coins: Coin[] = [];

    async execute({
        swapId,
        fromId,
        toId,
    }: ICreateSwapRelationDTO): Promise<Swap> {
        const swapExists = await this.swapsRepository.findById(swapId);

        const coinFromId = await this.coinsRepository.findById(fromId);
        const coinToId = await this.coinsRepository.findById(toId);

        this.coins.push(coinFromId);
        this.coins.push(coinToId);
        swapExists.updatedAt = new Date();
        swapExists.coins = this.coins;

        await this.swapsRepository.create(swapExists);

        return swapExists;
    }
}

export { SwapCoinsUseCase };
