import type { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCoinsUseCase } from './ListCoinsUseCase';

export class ListCoinsController {
	async handle(_request: Request, response: Response): Promise<Response> {
		const listCoinsUseCase = container.resolve(ListCoinsUseCase);

		const coins = await listCoinsUseCase.execute();

		return response.status(200).send(coins);
	}
}
