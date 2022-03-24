import { ICreateCryptocurrencyDTO } from "../dtos/ICreateCryptocurrencyDTO";
import { Cryptocurrency } from "../typeorm/entities/Cryptocurrency";

interface ICryptocurrencyRepository {
    create(data: ICreateCryptocurrencyDTO): Promise<Cryptocurrency>;
    findById(id: string): Promise<Cryptocurrency>;
    findByName(name: string): Promise<Cryptocurrency>;
}

export { ICryptocurrencyRepository };
