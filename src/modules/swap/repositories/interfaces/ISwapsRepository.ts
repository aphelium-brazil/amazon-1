import type { ICreateSwapDTO } from '@modules/swap/dtos/ICreateSwapDTO';
import type { Swap } from '@modules/swap/entities/Swap';

export interface ISwapsRepository {
	create(data: ICreateSwapDTO): Promise<Swap>;
	findByIds(ids: string[]): Promise<Swap[]>;
	listAll(): Promise<Swap[]>;
}
