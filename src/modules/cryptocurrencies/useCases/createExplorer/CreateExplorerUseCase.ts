import { ICreateExplorerDTO } from "@modules/cryptocurrencies/dtos/ICreateExplorerDTO";
import { IExplorerRepository } from "@modules/cryptocurrencies/repositories/IExplorerRepository";
import { Explorer } from "@modules/cryptocurrencies/typeorm/entities/Explorer";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateExplorerUseCase {
    constructor(
        @inject("ExplorerRepository")
        private explorer: IExplorerRepository
    ) {}

    async execute({
        name,
        description,
        url,
    }: ICreateExplorerDTO): Promise<Explorer> {
        const explorer = await this.explorer.create({
            name,
            description,
            url,
        });

        return explorer;
    }
}

export { CreateExplorerUseCase };
