import { ICoinsRepository } from "@modules/coin/repositories/interfaces/ICoinRepository";
import type { ICreateSwapRelationDTO } from "@modules/swap/dtos/ICreateSwapRelationDTO";
import type { Swap } from "@modules/swap/entities/Swap";
import { ISwapsRepository } from "@modules/swap/repositories/interfaces/ISwapsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class SwapCoinsUseCase {
    constructor(
        @inject("SwapsRepository")
        private readonly swapsRepository: ISwapsRepository,
        @inject("CoinsRepository")
        private readonly coinsRepository: ICoinsRepository
    ) {}

    async execute({
        swapId,
        fromId,
        toId,
    }: ICreateSwapRelationDTO): Promise<Swap> {
        const [swapExists] = await this.swapsRepository.findByIds([swapId]);

        if (!swapExists) {
            throw new Error("Swap not found!");
        }

        const coins = await this.coinsRepository.findByIds([fromId, toId]);

        swapExists.updatedAt = new Date();
        swapExists.coins = coins;

        await this.swapsRepository.create(swapExists);

        return swapExists;
    }
}
