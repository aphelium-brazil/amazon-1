import { ICreateCryptocurrencyDTO } from "../dtos/ICreateCryptocurrencyDTO";
import { Cryptocurrency } from "../typeorm/entities/Cryptocurrency";

interface ICryptocurrencyRepository {
    create(data: ICreateCryptocurrencyDTO): Promise<Cryptocurrency>;
}

export { ICryptocurrencyRepository };
