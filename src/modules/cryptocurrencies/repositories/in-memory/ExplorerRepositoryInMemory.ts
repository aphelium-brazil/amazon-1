import { ICreateExplorerDTO } from "@modules/cryptocurrencies/dtos/ICreateExplorerDTO";
import { Explorer } from "@modules/cryptocurrencies/typeorm/entities/Explorer";
import { IExplorerRepository } from "../IExplorerRepository";

class ExplorerRepositoryInMemory implements IExplorerRepository {
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

export { 
    ExplorerRepositoryInMemory
};