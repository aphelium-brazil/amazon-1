import { ICreateExplorerDTO } from "../dtos/ICreateExplorerDTO";
import { Explorer } from "../typeorm/entities/Explorer";

export interface IExplorerRepository {
    create(data: ICreateExplorerDTO): Promise<Explorer>;
}
