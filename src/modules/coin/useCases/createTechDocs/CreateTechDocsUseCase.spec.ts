import { CoinRepositoryInMemory } from '@modules/coin/repositories/in-memory/CoinRepositoryInMemory';
import { TechDocsRepositoryInMemory } from '@modules/coin/repositories/in-memory/TechDocsRepositoryInMemory';
import { CreateCoinUseCase } from '../createCoin/CreateCoinUseCase';
import { CreateTechDocsUseCase } from './CreateTechDocsUseCase';

describe('Coin', () => {
	let createTechDocsUseCase: CreateTechDocsUseCase;
	let techDocsRepositoryInMemory: TechDocsRepositoryInMemory;

	let createCoinUseCase: CreateCoinUseCase;
	let coinRepositoryInMemory: CoinRepositoryInMemory;

	beforeEach(() => {
		techDocsRepositoryInMemory = new TechDocsRepositoryInMemory();
		createTechDocsUseCase = new CreateTechDocsUseCase(techDocsRepositoryInMemory);
		coinRepositoryInMemory = new CoinRepositoryInMemory();
		createCoinUseCase = new CreateCoinUseCase(coinRepositoryInMemory);
	});

	describe('CreateTechDocsUseCase', () => {
		it('should create a tech docs', async () => {
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

			const techDoc = await createTechDocsUseCase.execute({
				title: 'string',
				description: 'string',
				url: 'string',
				coinId: coin.id
			});

			expect(techDoc).toHaveProperty('id');
		});
	});
});
