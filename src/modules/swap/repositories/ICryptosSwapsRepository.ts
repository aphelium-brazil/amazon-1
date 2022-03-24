import { ICreateCryptosSwapDTO } from "../dtos/ICreateCryptosSwapDTO";
import { Swap } from "../typeorm/entities/Swap";

interface ICryptosSwapsRepository {
    create(data: ICreateCryptosSwapDTO): Promise<Swap>;
}

export { ICryptosSwapsRepository };
