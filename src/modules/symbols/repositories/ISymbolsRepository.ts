import { ICreateSymbolDTO } from "../dtos/ICreateSymbolDTO";

interface ISymbolsRepository {
    create(data: ICreateSymbolDTO): Promise<void>;
}
