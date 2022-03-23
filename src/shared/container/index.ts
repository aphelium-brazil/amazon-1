import "@shared/container/providers";
import { IFiatsRepository } from "@modules/fiats/repositories/IFiatsRepository";
import { FiatsRepository } from "@modules/fiats/typeorm/repository/FiatsRepository";
import { container } from "tsyringe";
import { IBrokerRepository } from "@modules/brokers/repositories/IBrokerRepository";
import { BrokersRepository } from "@modules/brokers/typeorm/repositories/BrokerRepository";
import { ISocialProfileRepository } from "@modules/cryptocurrencies/repositories/ISocialProfileRepository";
import { SocialProfileRepository } from "@modules/cryptocurrencies/typeorm/repositories/SocialProfileRepository";
import { IExplorerRepository } from "@modules/cryptocurrencies/repositories/IExplorerRepository";
import { ExplorerRepository } from "@modules/cryptocurrencies/typeorm/repositories/ExplorerRepository";

container.registerSingleton<IFiatsRepository>(
    "FiatsRepository",
    FiatsRepository
);

container.registerSingleton<IBrokerRepository>(
    "BrokersRepository",
    BrokersRepository
);

container.registerSingleton<ISocialProfileRepository>(
    "SocialProfileRepository",
    SocialProfileRepository
);

container.registerSingleton<IExplorerRepository>(
    "ExplorerRepository",
    ExplorerRepository
);




