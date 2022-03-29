import { ICreateKlineDTO } from "@modules/kline/dtos/ICreateKlineDTO";
import { Kline } from "@modules/kline/typeorm/entities/Kline";
import { IKlineRepository } from "../IKlinesRepository";

class KlineRepositoryInMemory implements IKlineRepository {
    private klines: Kline[] = [];

    async create({
        interval,
        brokerId,
        swapId,
    }: ICreateKlineDTO): Promise<Kline> {
        const kline = new Kline();
        Object.assign(kline, { interval, brokerId, swapId });
        this.klines.push(kline);
        return kline;
    }

    async all(): Promise<Kline[]> {
        return this.klines;
    }

    async findSame({
        interval,
        brokerId,
        swapId,
    }: ICreateKlineDTO): Promise<Kline[]> {
        let klines = this.klines.filter((kline) => {
            if (
                kline.interval === interval &&
                kline.brokerId.id === brokerId &&
                kline.swapId.id === swapId
            ) {
                return true;
            }
            return false;
        });
        return klines;
    }
}

export { KlineRepositoryInMemory };
