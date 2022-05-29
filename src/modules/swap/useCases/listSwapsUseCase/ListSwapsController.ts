import type { Response, Request } from "express";
import { container } from "tsyringe";

import { ListSwapsUseCase } from "./ListSwapsUseCase";

export class ListSwapsController {
    async handle(_request: Request, response: Response): Promise<Response> {
        const listSwapsUseCase = container.resolve(ListSwapsUseCase);

        const swaps = await listSwapsUseCase.execute();

        return response.json(swaps);
    }
}
