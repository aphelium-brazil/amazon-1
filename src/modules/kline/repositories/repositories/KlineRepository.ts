import { ICreateKlineDTO } from "@modules/kline/dtos/ICreateKlineDTO";
import { Kline } from "@modules/kline/typeorm/entities/Kline";
import { getRepository, Repository } from "typeorm";
import { IKlineRepository } from "../IKlineRepository";

class KlineRepository implements IKlineRepository {
    private repository: Repository<Kline>;

    constructor() {
        this.repository = getRepository(Kline);
    }

    async create({
        interval,
        brokerId,
        swapId,
    }: ICreateKlineDTO): Promise<Kline> {
        const kline = this.repository.create({
            interval,
            brokerId,
            swapId,
        });

        await this.repository.save(kline);

        return kline;
    }

    async all(): Promise<Kline[]> {
        const all = this.repository.find();
        return all;
    }

    async findSame({
        interval,
        brokerId,
        swapId,
    }: ICreateKlineDTO): Promise<Kline[]> {
        const klines = await this.repository.find({
            where: { interval, brokerId, swapId },
        });

        return klines;
    }
}

export { KlineRepository };
