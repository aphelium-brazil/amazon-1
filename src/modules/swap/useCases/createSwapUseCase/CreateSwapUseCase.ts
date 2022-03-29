import { ICreateSwapDTO } from "@modules/swap/dtos/ICreateSwapDTO";
import { ISwapsRepository } from "@modules/swap/repositories/ISwapsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateSwapUseCase {
    constructor(
        @inject("SwapsRepository")
        private swapsRepository: ISwapsRepository
    ) {}

    async execute({ name, isActive }: ICreateSwapDTO) {
        const swap = await this.swapsRepository.create({ name, isActive });
        return swap;
    }
}

export { CreateSwapUseCase };