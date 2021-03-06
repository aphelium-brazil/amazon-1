import type { Response, Request } from 'express';
import { container } from 'tsyringe';

import { SwapCoinsUseCase } from './SwapCoinsUseCase';

export class SwapCoinsController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const { fromId, toId } = request.body;

		const swapCoinsUseCase = container.resolve(SwapCoinsUseCase);

		if (!id) {
			throw new Error('ID not found!');
		}

		const swap = await swapCoinsUseCase.execute({
			swapId: id,
			fromId,
			toId
		});

		return response.json(swap);
	}
}
