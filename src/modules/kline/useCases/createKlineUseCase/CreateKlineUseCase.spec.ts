import { BrokerRepositoryInMemory } from '@modules/brokers/repositories/in-memory/BrokerRepositoryInMemory';
import { CreateBrokerUseCase } from '@modules/brokers/useCases/createBroker/CreateBrokerUseCase';
import { IntervalEnums } from '@modules/kline/enums/IntervalEnums';
import { KlineRepositoryInMemory } from '@modules/kline/repositories/in-memory/KlineRepositoryInMemory';
import { SwapsRepositoryInMemory } from '@modules/swap/repositories/in-memory/SwapsRepositoryInMemory';
import { CreateSwapUseCase } from '@modules/swap/useCases/createSwapUseCase/CreateSwapUseCase';

import { CreateKlineUseCase } from './CreateKlineUseCase';

describe('Create Kline', () => {
	let klineRepository: KlineRepositoryInMemory;
	let swapsRepository: SwapsRepositoryInMemory;
	let brokerRepository: BrokerRepositoryInMemory;

	let createBrokerUseCase: CreateBrokerUseCase;
	let createSwapUseCase: CreateSwapUseCase;
	let createKlineUseCase: CreateKlineUseCase;

	beforeEach(() => {
		klineRepository = new KlineRepositoryInMemory();
		swapsRepository = new SwapsRepositoryInMemory();
		brokerRepository = new BrokerRepositoryInMemory();

		createSwapUseCase = new CreateSwapUseCase(swapsRepository);
		createBrokerUseCase = new CreateBrokerUseCase(brokerRepository);

		createKlineUseCase = new CreateKlineUseCase(
			klineRepository,
			swapsRepository,
			brokerRepository
		);
	});

	it('should create a kline', async () => {
		const swap = await createSwapUseCase.execute({
			name: 'BTCBRL',
			isActive: true
		});

		const broker = await createBrokerUseCase.execute({
			name: 'Binance',
			description: 'Chinese broker',
			slug: 'String',
			logo: 'String',
			dateLaunched: new Date(1647966991)
		});

		if (!broker?.id) {
			throw new Error('Broker not found');
		}

		const kline = await createKlineUseCase.execute({
			interval: IntervalEnums['1m'],
			swapId: swap.id,
			brokerId: broker.id
		});

		expect(kline).toHaveProperty('id');
	});
});
