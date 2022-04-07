import type { ICreateKlineDTO } from '@modules/kline/dtos/ICreateKlineDTO';
import { Kline } from '@modules/kline/entities/Kline';
import type { FindManyOptions, Repository } from 'typeorm';
import { getRepository } from 'typeorm';

import type { IKlineRepository } from '@modules/kline/repositories/interfaces/IKlineRepository';

export class KlineRepository implements IKlineRepository {
	private readonly repository: Repository<Kline>;

	constructor() {
		this.repository = getRepository(Kline);
	}

	async create({ interval, brokerId, swapId }: ICreateKlineDTO): Promise<Kline> {
		const kline = this.repository.create({
			interval,
			brokerId,
			swapId
		});

		return this.repository.save(kline);
	}

	async all(where?: FindManyOptions<Kline>['where']): Promise<Kline[]> {
		return this.repository.find({ where });
	}

	async findSame({ interval, brokerId, swapId }: ICreateKlineDTO): Promise<Kline[]> {
		return this.repository.find({
			where: { interval, brokerId, swapId }
		});
	}
}
