import { ICreateExplorerDTO } from "@modules/cryptocurrencies/dtos/ICreateExplorerDTO";
import { IExplorerRepository } from "@modules/cryptocurrencies/repositories/IExplorerRepository";
import { getRepository, Repository } from "typeorm";
import { Explorer } from "../entities/Explorer";

class ExplorerRepository implements IExplorerRepository {
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

        await this.repository.save(explorer);
        return explorer;
    }
}

export { ExplorerRepository };