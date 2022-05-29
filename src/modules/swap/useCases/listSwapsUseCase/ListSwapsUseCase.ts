import { ISwapsRepository } from "@modules/swap/repositories/interfaces/ISwapsRepository";
import type { Swap } from "@modules/swap/entities/Swap";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListSwapsUseCase {
    constructor(
        @inject("SwapsRepository")
        private readonly swapsRepository: ISwapsRepository
    ) {}

    async execute(): Promise<Swap[]> {
        const swaps = await this.swapsRepository.listAll();
        return swaps;
    }
}
