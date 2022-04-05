import { ICoinsRepository } from "@modules/coin/repositories/interfaces/ICoinRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateCoinUseCase {
    constructor(
        @inject("CoinsRepository")
        private coinsRepository: ICoinsRepository
    ) {}

    async execute() {}
}
