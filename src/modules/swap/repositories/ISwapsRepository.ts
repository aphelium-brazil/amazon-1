import { ICreateSwapDTO } from "../dtos/ICreateSwapDTO";
import { Swap } from "../typeorm/entities/Swap";

interface ISwapsRepository {
    create(data: ICreateSwapDTO): Promise<Swap>;
    findById(id: string): Promise<Swap>;
    listAll(): Promise<Swap[]>;
}

export { ISwapsRepository };
