import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListSwapsUseCase } from "./ListSwapsUseCase";

export class ListSwapsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listSwapsUseCase = container.resolve(ListSwapsUseCase);

        const swaps = await listSwapsUseCase.execute();

        return response.json(swaps);
    }
}
