import type { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTechDocsUseCase } from './CreateTechDocsUseCase';

export class CreateTechDocsController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { title, description, url } = request.body;
		const { id } = request.params;

		const createTechDocsUseCase = container.resolve(CreateTechDocsUseCase);

		if (id === undefined) {
			return response.status(400).json({ message: 'The id of coin is undefined' }).end();
		}

		await createTechDocsUseCase.execute({
			title,
			description,
			url,
			coinId: id
		});

		return response.status(201).send();
	}
}
