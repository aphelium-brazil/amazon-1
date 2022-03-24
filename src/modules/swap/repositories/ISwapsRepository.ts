import { ICreateSwapDTO } from "../dtos/ICreateSwapDTO";
import { Swap } from "../typeorm/entities/Swap";

interface ISwapsRepository {
    create(data: ICreateSwapDTO): Promise<Swap>;
}

export { ISwapsRepository };
