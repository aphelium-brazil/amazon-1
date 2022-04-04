import { IBrokerRepository } from "@modules/brokers/repositories/IBrokerRepository";
import { ICreateKlineDTO } from "@modules/kline/dtos/ICreateKlineDTO";
import { IKlineRepository } from "@modules/kline/repositories/IKlineRepository";
import { Kline } from "@modules/kline/entities/Kline";
import { ISwapsRepository } from "@modules/swap/repositories/ISwapsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateKlineUseCase {
    constructor(
        @inject("KlineRepository")
        private klineRepository: IKlineRepository,
        @inject("SwapsRepository")
        private swapRepository: ISwapsRepository,
        @inject("BrokersRepository")
        private brokerRepository: IBrokerRepository
    ) {}

    async execute({
        interval,
        brokerId,
        swapId,
    }: ICreateKlineDTO): Promise<Kline> {
        // Validate if the swap exists
        const swapExists = await this.swapRepository.findByIds([swapId]);

        if (!swapExists) {
            throw new AppError("Swap not found");
        }

        // Validate if the broker exists
        const brokerExists = await this.brokerRepository.findById(brokerId);

        if (!brokerExists) {
            throw new AppError("Broker not found");
        }

        // Validate if the kline already exists with the same interval, swap and broker
        const klineExists = await this.klineRepository.findSame({
            interval,
            brokerId,
            swapId,
        });

        if (klineExists.length > 0) {
            throw new AppError("Kline already exists");
        }

        return this.klineRepository.create({
            interval,
            brokerId: brokerExists.id,
            swapId: swapExists[0].id,
        });
    }
}
