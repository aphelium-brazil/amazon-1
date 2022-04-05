import { Request, Response } from "express";
import { container } from "tsyringe";

import { RemoveCoinUseCase } from "./RemoveCoinUseCase";

export class RemoveCoinController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const removeCoinUseCase = await container.resolve(RemoveCoinUseCase);

        await removeCoinUseCase.execute(id);

        return response.status(200).send();
    }
}
