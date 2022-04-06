import { IBrokerRepository } from "@modules/brokers/repositories/interfaces/IBrokerRepository";
import { BrokersRepository } from "@modules/brokers/repositories/BrokerRepository";
import { ICoinsRepository } from "@modules/coin/repositories/interfaces/ICoinRepository";
import { IExplorerRepository } from "@modules/coin/repositories/interfaces/IExplorerRepository";
import { ISocialProfileRepository } from "@modules/coin/repositories/interfaces/ISocialProfileRepository";
import { CoinsRepository } from "@modules/coin/repositories/CoinsRepository";
import { ExplorerRepository } from "@modules/coin/repositories/ExplorerRepository";
import { SocialProfilesRepository } from "@modules/coin/repositories/SocialProfilesRepository";
import { IKlineRepository } from "@modules/kline/repositories/interfaces/IKlineRepository";
import { KlineRepository } from "@modules/kline/repositories/KlineRepository";
import { SwapsRepository } from "@modules/swap/repositories/SwapsRepository";
import { container } from "tsyringe";
import { ISwapsRepository } from "@modules/swap/repositories/interfaces/ISwapsRepository";
import { ITagsRepository } from "@modules/coin/repositories/interfaces/ITagsRepository";
import { TagsRepository } from "@modules/coin/repositories/TagsRepository";

container.registerSingleton<IBrokerRepository>(
    "BrokersRepository",
    BrokersRepository
);

container.registerSingleton<ISocialProfileRepository>(
    "SocialProfilesRepository",
    SocialProfilesRepository
);

container.registerSingleton<IExplorerRepository>(
    "ExplorerRepository",
    ExplorerRepository
);

container.registerSingleton<ISwapsRepository>(
    "SwapsRepository",
    SwapsRepository
);

container.registerSingleton<ICoinsRepository>(
    "CoinsRepository",
    CoinsRepository
);

container.registerSingleton<IKlineRepository>(
    "KlineRepository",
    KlineRepository
);

container.registerSingleton<ITagsRepository>(
    "TagsRepository",
    TagsRepository
)
