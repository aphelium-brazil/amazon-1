import { ISwapAvailableInBrokerDTO } from "@modules/brokers/dtos/ISwapAvailableInBrokerDTO";
import { IBrokerRepository } from "@modules/brokers/repositories/IBrokerRepository";
import { ISwapsRepository } from "@modules/swap/repositories/ISwapsRepository";
import { Swap } from "@modules/swap/typeorm/entities/Swap";
import { inject, injectable } from "tsyringe";

@injectable()
class SwapAvailableInBrokerUseCase {
    constructor(
        @inject("SwapsRepository")
        private swapsRepository: ISwapsRepository,
        @inject("CoinsRepository")
        private brokersReposity: IBrokerRepository
    ) {}

    async execute({ swaps }: ISwapAvailableInBrokerDTO): Promise<void> {
        //TODO: Devo implementar um método que lê um array de swaps e relaciona com a corretora na tabela SwapsBrokers
        const swapsExists = await this.swapsRepository.findById(swaps);

        return;
    }
}

export { SwapAvailableInBrokerUseCase };
