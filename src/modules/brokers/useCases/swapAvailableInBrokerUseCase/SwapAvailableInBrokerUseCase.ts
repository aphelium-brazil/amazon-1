import type { ISwapAvailableInBrokerDTO } from "@modules/brokers/dtos/ISwapAvailableInBrokerDTO";
import { IBrokerRepository } from "@modules/brokers/repositories/interfaces/IBrokerRepository";
import type { Broker } from "@modules/brokers/entities/Broker";
import { ISwapsRepository } from "@modules/swap/repositories/interfaces/ISwapsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class SwapAvailableInBrokerUseCase {
    constructor(
        @inject("SwapsRepository")
        private readonly swapsRepository: ISwapsRepository,
        @inject("BrokersRepository")
        private readonly brokersReposity: IBrokerRepository
    ) {}

    async execute({
        brokerId,
        swaps,
    }: ISwapAvailableInBrokerDTO): Promise<Broker> {
        // TODO: Apenas aceitar swaps que estejam associados a outras moedas
        // TODO: Apenas aceitar swaps que estejam ativos

        const brokerExists = await this.brokersReposity.findById(brokerId);
        const [swapsExists] = await this.swapsRepository.findByIds(swaps);

        if (!swapsExists) {
            throw new Error("Swap not found");
        }

        if (!brokerExists) {
            throw new Error("Broker not found");
        }

        brokerExists.swaps = [swapsExists];

        await this.brokersReposity.create(brokerExists);

        return brokerExists;
    }
}
