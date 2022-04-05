import { Coin } from "@modules/coin/entities/Coin";
import { ICoinsRepository } from "@modules/coin/repositories/interfaces/ICoinRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindCoinByIdUseCase {
    constructor(
        @inject("CoinsRepository")
        private coinRepository: ICoinsRepository
    ) {}

    async execute(id: string): Promise<Coin> {
        const coin = await this.coinRepository.findByIds([id]);

        if (!coin[0]) {
            throw new Error("Coin not found");
        }
        return coin[0];
    }
}
