import "@shared/container/providers";
import { IFiatsRepository } from "@modules/fiats/repositories/IFiatsRepository";
import { FiatsRepository } from "@modules/fiats/typeorm/repository/FiatsRepository";
import { container } from "tsyringe";
import { IBrokerRepository } from "@modules/brokers/repositories/IBrokerRepository";
import { BrokersRepository } from "@modules/brokers/typeorm/repositories/BrokerRepository";

container.registerSingleton<IFiatsRepository>(
    "FiatsRepository",
    FiatsRepository
);

container.registerSingleton<IBrokerRepository>(
    "BrokersRepository",
    BrokersRepository
);
