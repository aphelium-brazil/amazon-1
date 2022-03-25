import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateCryptosSwapUseCase } from "./CreateCryptosSwapUseCase";

class CreateCryptosSwapController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { type, fromId, toId } = request.body;

        const createCryptosSwapUseCase = container.resolve(
            CreateCryptosSwapUseCase
        );

        const swap = await createCryptosSwapUseCase.execute({
            type,
            swapId: id,
            fromId,
            toId,
        });

        return response.json(swap);
    }
}

export { CreateCryptosSwapController };
