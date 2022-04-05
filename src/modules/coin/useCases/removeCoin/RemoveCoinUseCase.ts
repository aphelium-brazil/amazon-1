import { ICoinsRepository } from "@modules/coin/repositories/interfaces/ICoinRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class RemoveCoinUseCase {
    constructor(
        @inject("CoinsRepository")
        private coinsRepository: ICoinsRepository
    ) {}

    async execute(id: string) {
        const coinExists = await this.coinsRepository.findByIds([id]);

        if (coinExists[0]) {
            await this.coinsRepository.remove(id);
        } else {
            throw new AppError("Coin not found!");
        }
    }
}
