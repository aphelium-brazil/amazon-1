import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateFiatUseCase } from "./CreateFiatUseCase";

class CreateFiatController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, country, description, symbol, sign } = request.body;

        const createFiatUseCase = container.resolve(CreateFiatUseCase);

        await createFiatUseCase.execute({
            name,
            country,
            description,
            symbol,
            sign,
        });

        return response.status(201).send();
    }
}

export { CreateFiatController };
