import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindCoinByIdUseCase } from "./FindCoinByIdUseCase";

export class FindCoinByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findCoinByIdUseCase = await container.resolve(
            FindCoinByIdUseCase
        );

        const coin = await findCoinByIdUseCase.execute(id);

        return response.status(200).send(coin);
    }
}
