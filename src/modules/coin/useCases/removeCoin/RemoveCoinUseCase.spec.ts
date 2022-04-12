import { CoinRepositoryInMemory } from '@modules/coin/repositories/in-memory/CoinRepositoryInMemory';

import { CreateCoinUseCase } from '../createCoin/CreateCoinUseCase';
import { RemoveCoinUseCase } from './RemoveCoinUseCase';

describe('Coin', () => {
	let createCoinUseCase: CreateCoinUseCase;
	let removeCoinUseCase: RemoveCoinUseCase;
	let coinRepositoryInMemory: CoinRepositoryInMemory;

	beforeEach(() => {
		coinRepositoryInMemory = new CoinRepositoryInMemory();
		createCoinUseCase = new CreateCoinUseCase(coinRepositoryInMemory);
		removeCoinUseCase = new RemoveCoinUseCase(coinRepositoryInMemory);
	});

	describe('RemoveCoinUseCase', () => {
		it('should be defined', async () => {
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

			await removeCoinUseCase.execute(coin.id);

			const coinRemoved = await coinRepositoryInMemory.findByIds([coin.id]);

			expect(coinRemoved).toHaveLength(0);
		});
	});
});
