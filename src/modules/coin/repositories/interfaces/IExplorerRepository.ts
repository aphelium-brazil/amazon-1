import { ICreateExplorerDTO } from '@modules/coin/dtos/ICreateExplorerDTO';
import { Explorer } from '@modules/coin/entities/Explorer';

export interface IExplorerRepository {
	create(data: ICreateExplorerDTO): Promise<Explorer>;
}
