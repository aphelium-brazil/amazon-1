import { ICreateExplorerDTO } from "../dtos/ICreateExplorerDTO";
import { Explorer } from "../entities/Explorer";

export interface IExplorerRepository {
    create(data: ICreateExplorerDTO): Promise<Explorer>;
}
