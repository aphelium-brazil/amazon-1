import type { ICreateKlineDTO } from "@modules/kline/dtos/ICreateKlineDTO";
import type { Kline } from "@modules/kline/entities/Kline";

export interface IKlineRepository {
    create(data: ICreateKlineDTO): Promise<Kline>;
    all(): Promise<Kline[]>;

    // TODO: Trocar para Exclude<ICreateKlineDTO, 'candles'>;
    findSame({ interval, brokerId, swapId }: ICreateKlineDTO): Promise<Kline[]>;
}
