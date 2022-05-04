import type { ICreateTechDocDTO } from '@modules/coin/dtos/ICreateTechDocDTO';

export interface ITechDocsRepository {
	create(data: ICreateTechDocDTO): Promise<TechDoc>;
}
