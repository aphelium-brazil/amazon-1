import type { Request, Response } from "express";
import { container } from "tsyringe";

import { FindCoinByIdUseCase } from "./FindCoinByIdUseCase";

export class FindCoinByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findCoinByIdUseCase = container.resolve(FindCoinByIdUseCase);

        if (!id) {
            throw new Error("ID not found!");
        }

        const coin = await findCoinByIdUseCase.execute(id);

        return response.status(200).send(coin);
    }
}
