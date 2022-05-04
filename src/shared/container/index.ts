import { BrokersRepository } from '@modules/brokers/repositories/BrokerRepository';
import type { IBrokerRepository } from '@modules/brokers/repositories/interfaces/IBrokerRepository';
import { CoinsRepository } from '@modules/coin/repositories/CoinsRepository';
import { ExplorerRepository } from '@modules/coin/repositories/ExplorerRepository';
import type { ICoinsRepository } from '@modules/coin/repositories/interfaces/ICoinRepository';
import type { IExplorerRepository } from '@modules/coin/repositories/interfaces/IExplorerRepository';
import type { ISocialProfileRepository } from '@modules/coin/repositories/interfaces/ISocialProfileRepository';
import type { ITagsRepository } from '@modules/coin/repositories/interfaces/ITagsRepository';
import type { ITechDocsRepository } from '@modules/coin/repositories/interfaces/ITechDocsRepository';
import { SocialProfilesRepository } from '@modules/coin/repositories/SocialProfilesRepository';
import { TagsRepository } from '@modules/coin/repositories/TagsRepository';
import { TechDocsRepository } from '@modules/coin/repositories/TechDocsRepository';
import type { IKlineRepository } from '@modules/kline/repositories/interfaces/IKlineRepository';
import { KlineRepository } from '@modules/kline/repositories/KlineRepository';
import type { ISwapsRepository } from '@modules/swap/repositories/interfaces/ISwapsRepository';
import { SwapsRepository } from '@modules/swap/repositories/SwapsRepository';
import { container } from 'tsyringe';

container.registerSingleton<IBrokerRepository>('BrokersRepository', BrokersRepository);

container.registerSingleton<ISocialProfileRepository>(
	'SocialProfilesRepository',
	SocialProfilesRepository
);

container.registerSingleton<IExplorerRepository>(
	'ExplorerRepository',
	ExplorerRepository
);

container.registerSingleton<ISwapsRepository>('SwapsRepository', SwapsRepository);

container.registerSingleton<ICoinsRepository>('CoinsRepository', CoinsRepository);

container.registerSingleton<IKlineRepository>('KlineRepository', KlineRepository);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);

container.registerSingleton<ITechDocsRepository>(
	'TechDocsRepository',
	TechDocsRepository
);
