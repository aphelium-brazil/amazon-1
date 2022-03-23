import { ICreateExplorerDTO } from "../dtos/ICreateExplorerDTO";
import { Explorer } from "../typeorm/entities/Explorer";

interface IExplorerRepository { 
    create(data: ICreateExplorerDTO):
    Promise<Explorer>;
}

export { IExplorerRepository };