import type { IImportCoinDTO } from '@modules/coin/dtos/IImportCoinDTO';
import { ICoinsRepository } from '@modules/coin/repositories/interfaces/ICoinRepository';
import csvParse from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ImportCoinsUseCase {
	constructor(
		@inject('CoinsRepository')
		private readonly coinsRepository: ICoinsRepository
	) {}

	loadCoins(file: Express.Multer.File): Promise<IImportCoinDTO[]> {
		return new Promise((resolve, reject) => {
			const stream = fs.createReadStream(file.path);

			const coins: IImportCoinDTO[] = [];

			const parseFile = csvParse({
				delimiter: ';' || ',' || ':'
			});

			stream.pipe(parseFile);

			parseFile

				.on(
					'data',
					([
						name,
						isFiat,
						country,
						description,
						logo,
						symbol,
						isActive,
						firstHistoricalData,
						lastHistoricalData
					]) => {
						coins.push({
							name,
							isFiat,
							country,
							description,
							logo,
							symbol,
							isActive,
							firstHistoricalData,
							lastHistoricalData
						});
					}
				)

				.on('end', () => {
					fs.promises.unlink(file.path).catch(console.error);
					resolve(coins);
				})

				.on('error', (err) => {
					reject(err);
				});
		});
	}

	async execute(file: Express.Multer.File): Promise<void> {
		const coins = await this.loadCoins(file);

		await Promise.all(
			coins.map(
				async ({
					name,
					isFiat,
					country,
					description,
					logo,
					symbol,
					isActive,
					firstHistoricalData,
					lastHistoricalData
				}) => {
					// Bussiness Rule: Should not create a new coin if it already exists one with the same name.
					const coinNameAlreadyExists = await this.coinsRepository.findByName(name);
					const coinSymbolAlreadyExists = await this.coinsRepository.findBySymbol(symbol);

					if (coinNameAlreadyExists || coinSymbolAlreadyExists) {
						return;
					}

					await this.coinsRepository.create({
						name,
						isFiat,
						country,
						description,
						logo,
						symbol,
						isActive,
						firstHistoricalData,
						lastHistoricalData
					});
				}
			)
		);
	}
}
