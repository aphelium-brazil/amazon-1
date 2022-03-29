import { ICreateKlineDTO } from "../dtos/ICreateKlineDTO";
import { Kline } from "../typeorm/entities/Kline";

interface IKlineRepository {
    create(data: ICreateKlineDTO): Promise<Kline>;
    all(): Promise<Kline[]>;
    findSame({ interval, brokerId, swapId }: ICreateKlineDTO): Promise<Kline[]>;
}

export { IKlineRepository };
