import { ICreateSwapDTO } from "../dtos/ICreateSwapDTO";
import { Swap } from "../entities/Swap";

export interface ISwapsRepository {
    create(data: ICreateSwapDTO): Promise<Swap>;
    findByIds(ids: string[]): Promise<Swap[]>;
    listAll(): Promise<Swap[]>;
}
