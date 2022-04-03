import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateSwapUseCase } from "./CreateSwapUseCase";

export class CreateSwapController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, isActive } = request.body;

        const createSwapUseCase = container.resolve(CreateSwapUseCase);

        await createSwapUseCase.execute({
            name,
            isActive,
        });

        return response.status(201).send();
    }
}
