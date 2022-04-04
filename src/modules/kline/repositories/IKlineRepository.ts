import { ICreateKlineDTO } from "../dtos/ICreateKlineDTO";
import { Kline } from "../entities/Kline";

export interface IKlineRepository {
    create(data: ICreateKlineDTO): Promise<Kline>;
    all(): Promise<Kline[]>;

    // TODO: Trocar para Exclude<ICreateKlineDTO, 'candles'>;
    findSame({ interval, brokerId, swapId }: ICreateKlineDTO): Promise<Kline[]>;
}
