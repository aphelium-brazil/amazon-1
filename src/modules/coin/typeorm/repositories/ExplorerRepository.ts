import { ICreateExplorerDTO } from "@modules/coin/dtos/ICreateExplorerDTO";
import { IExplorerRepository } from "@modules/coin/repositories/IExplorerRepository";
import { getRepository, Repository } from "typeorm";

import { Explorer } from "../entities/Explorer";

export class ExplorerRepository implements IExplorerRepository {
    private repository: Repository<Explorer>;

    constructor() {
        this.repository = getRepository(Explorer);
    }

    async create({
        name,
        description,
        url,
    }: ICreateExplorerDTO): Promise<Explorer> {
        const explorer = this.repository.create({
            name,
            description,
            url,
        });

        return this.repository.save(explorer);
    }
}
