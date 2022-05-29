import type { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBrokerUseCase } from "./CreateBrokerUseCase";

export class CreateBrokerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, slug, logo, dateLaunched } = request.body;

        const createBrokerUseCase = container.resolve(CreateBrokerUseCase);

        await createBrokerUseCase.execute({
            name,
            description,
            slug,
            logo,
            dateLaunched,
        });

        return response.status(201).send();
    }
}
