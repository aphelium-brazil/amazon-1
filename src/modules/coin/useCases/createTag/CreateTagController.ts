import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTagUseCase } from "./CreateTagUseCase";

export class CreateTagController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createTagUseCase = container.resolve(CreateTagUseCase);

        await createTagUseCase.execute({
            name,
            description,
        });

        return response.status(201).send();
    }
}
