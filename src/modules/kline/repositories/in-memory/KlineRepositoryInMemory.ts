import { ICreateKlineDTO } from '@modules/kline/dtos/ICreateKlineDTO';
import { Kline } from '@modules/kline/entities/Kline';
import { IKlineRepository } from '../interfaces/IKlineRepository';

export class KlineRepositoryInMemory implements IKlineRepository {
	private readonly klines: Kline[] = [];

	async create({ interval, brokerId, swapId }: ICreateKlineDTO): Promise<Kline> {
		const kline = new Kline();
		Object.assign(kline, { interval, brokerId, swapId });
		this.klines.push(kline);
		return kline;
	}

	async all(): Promise<Kline[]> {
		return this.klines;
	}

	async findSame({ interval, brokerId, swapId }: ICreateKlineDTO): Promise<Kline[]> {
		return this.klines.filter(
			(kline) =>
				kline.interval === interval &&
				kline.brokerId === brokerId &&
				kline.swapId === swapId
		);
	}
}
