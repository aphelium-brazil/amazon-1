import { ISwapAvailableInBrokerDTO } from "@modules/brokers/dtos/ISwapAvailableInBrokerDTO";
import { IBrokerRepository } from "@modules/brokers/repositories/IBrokerRepository";
import { Broker } from "@modules/brokers/typeorm/entities/Broker";
import { ISwapsRepository } from "@modules/swap/repositories/ISwapsRepository";
import { inject, injectable } from "tsyringe";

@injectable() export 
class SwapAvailableInBrokerUseCase {
    constructor(
        @inject("SwapsRepository")
        private swapsRepository: ISwapsRepository,
        @inject("BrokersRepository")
        private brokersReposity: IBrokerRepository
    ) {}

    async execute({
        brokerId,
        swaps,
    }: ISwapAvailableInBrokerDTO): Promise<Broker> {
        //TODO: Apenas aceitar swaps que estejam associados a outras moedas
        //TODO: Apenas aceitar swaps que estejam ativos

        const brokerExists = await this.brokersReposity.findById(brokerId);
        const swapsExists = await this.swapsRepository.findByIds(swaps);

        brokerExists.swaps = swapsExists;

        await this.brokersReposity.create(brokerExists);

        return brokerExists;
    }
}