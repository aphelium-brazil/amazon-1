import type { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCoinUseCase } from './UpdateCoinUseCase';

export class UpdateCoinController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const {
			name,
			isFiat,
			country,
			description,
			logo,
			symbol,
			isActive,
			firstHistoricalData,
			lastHistoricalData
		} = request.body;

		const updateCoinUseCase = container.resolve(UpdateCoinUseCase);

		if (!id) {
			throw new Error('ID not found!');
		}

		await updateCoinUseCase.execute({
			id,
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

		return response.status(200).send();
	}
}
