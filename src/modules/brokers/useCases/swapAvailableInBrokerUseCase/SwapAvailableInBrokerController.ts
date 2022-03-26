import { Response, Request } from "express";
import { container } from "tsyringe";
import { SwapAvailableInBrokerUseCase } from "./SwapAvailableInBrokerUseCase";

class SwapAvailableInBrokerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { swaps } = request.body;

        const swapAvailableInBrokerUseCase = container.resolve(
            SwapAvailableInBrokerUseCase
        );

        const swap = await swapAvailableInBrokerUseCase.execute({
            brokerId: id,
            swaps,
        });

        return response.json(swap);
    }
}

export { SwapAvailableInBrokerController };
