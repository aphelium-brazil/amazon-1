import { Coin } from "@modules/coin/entities/Coin";
import { ICoinsRepository } from "@modules/coin/repositories/interfaces/ICoinRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListCoinsUseCase {
    constructor(
        @inject("CoinsRepository")
        private coinRepository: ICoinsRepository
    ) {}

    async execute(): Promise<Coin[]> {
        const coins = await this.coinRepository.all();
        return coins;
    }
}
