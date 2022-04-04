import { ICreateExplorerDTO } from "@modules/coin/dtos/ICreateExplorerDTO";
import { Explorer } from "@modules/coin/typeorm/entities/Explorer";

import { IExplorerRepository } from "../IExplorerRepository";

export class ExplorerRepositoryInMemory implements IExplorerRepository {
    explorers: Explorer[] = [];
    async create({
        name,
        description,
        url,
    }: ICreateExplorerDTO): Promise<Explorer> {
        const explorer = new Explorer();

        Object.assign(explorer, {
            name,
            description,
            url,
        });

        this.explorers.push(explorer);

        return explorer;
    }
}
