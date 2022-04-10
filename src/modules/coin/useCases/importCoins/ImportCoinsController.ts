import type { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCoinsUseCase } from './ImportCoinsUseCase';

export class ImportCoinsController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { file } = request;

		if (!file) {
			return response.status(400).json({
				message: 'File not found'
			});
		}

		const importCoinsUseCase = container.resolve(ImportCoinsUseCase);

		await importCoinsUseCase.execute(file);

		return response.status(201).send();
	}
}
