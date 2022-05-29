import type { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateExplorerUseCase } from "./CreateExplorerUseCase";

class CreateExplorerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, url } = request.body;

        const createExplorerUseCase = container.resolve(CreateExplorerUseCase);

        await createExplorerUseCase.execute({
            name,
            description,
            url,
        });

        return response.status(201).send();
    }
}
export { CreateExplorerController };
