import { CoinRepositoryInMemory } from '@modules/coin/repositories/in-memory/CoinRepositoryInMemory';

import { CreateCoinUseCase } from './CreateCoinUseCase';

describe('Coin', () => {
	let createCoinUseCase: CreateCoinUseCase;
	let coinRepositoryInMemory: CoinRepositoryInMemory;

	beforeEach(() => {
		coinRepositoryInMemory = new CoinRepositoryInMemory();
		createCoinUseCase = new CreateCoinUseCase(coinRepositoryInMemory);
	});

	it('should create a coin', async () => {
		const coin = await createCoinUseCase.execute({
			name: 'string',
			isFiat: false,
			description: 'string',
			logo: 'string',
			symbol: 'string',
			isActive: true,
			firstHistoricalData: 'string',
			lastHistoricalData: 'string'
		});

		expect(coin).toHaveProperty('id');
	});
});
