import "@shared/container/providers";
import { IFiatsRepository } from "@modules/fiats/repositories/IFiatsRepository";
import { FiatsRepository } from "@modules/fiats/typeorm/repository/FiatsRepository";
import { container } from "tsyringe";
import { IBrokerRepository } from "@modules/brokers/repositories/IBrokerRepository";
import { BrokersRepository } from "@modules/brokers/typeorm/repositories/BrokerRepository";
import { ISocialProfileRepository } from "@modules/cryptocurrencies/repositories/ISocialProfileRepository";
import { SocialProfilesRepository } from "@modules/cryptocurrencies/typeorm/repositories/SocialProfilesRepository";
import { ICryptocurrencyRepository } from "@modules/cryptocurrencies/repositories/ICryptocurrencyRepository";
import { CryptocurrenciesRepository } from "@modules/cryptocurrencies/typeorm/repositories/CryptocurrenciesRepository";

container.registerSingleton<IFiatsRepository>(
    "FiatsRepository",
    FiatsRepository
);

container.registerSingleton<IBrokerRepository>(
    "BrokersRepository",
    BrokersRepository
);

container.registerSingleton<ISocialProfileRepository>(
    "SocialProfilesRepository",
    SocialProfilesRepository
);

container.registerSingleton<ICryptocurrencyRepository>(
    "CryptocurrenciesRepository",
    CryptocurrenciesRepository
);
