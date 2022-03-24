import { ICreateBrokerDTO } from "../dtos/ICreateBrokerDTO";
import { Broker } from "../typeorm/entities/Broker";

interface IBrokerRepository {
    create(data: ICreateBrokerDTO): Promise<Broker>;
    findById(id: string): Promise<Broker>;
    findByName(name: string): Promise<Broker>;
}

export { IBrokerRepository };
