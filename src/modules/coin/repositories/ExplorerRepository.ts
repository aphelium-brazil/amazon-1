import type { ICreateExplorerDTO } from "@modules/coin/dtos/ICreateExplorerDTO";
import type { IExplorerRepository } from "@modules/coin/repositories/interfaces/IExplorerRepository";

import type { Explorer } from "../entities/Explorer";

export class ExplorerRepository implements IExplorerRepository {
    create(data: ICreateExplorerDTO): Promise<Explorer> {
        throw new Error("Method not implemented.");
    }
}
