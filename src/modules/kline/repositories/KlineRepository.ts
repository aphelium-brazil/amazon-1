import type { ICreateKlineDTO } from "@modules/kline/dtos/ICreateKlineDTO";
import type { Kline } from "@modules/kline/entities/Kline";

import type { IKlineRepository } from "@modules/kline/repositories/interfaces/IKlineRepository";

export class KlineRepository implements IKlineRepository {
    create(data: ICreateKlineDTO): Promise<Kline> {
        throw new Error("Method not implemented.");
    }

    all(): Promise<Kline[]> {
        throw new Error("Method not implemented.");
    }

    findSame({
        interval,
        brokerId,
        swapId,
    }: ICreateKlineDTO): Promise<Kline[]> {
        throw new Error("Method not implemented.");
    }
}
