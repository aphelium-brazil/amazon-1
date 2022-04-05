import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCoinsUseCase } from "./ListCoinsUseCase";

export class ListCoinsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCoinsUseCase = await container.resolve(ListCoinsUseCase);

        const coins = await listCoinsUseCase.execute();

        return response.status(200).send(coins);
    }
}
