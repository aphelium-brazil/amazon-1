import type { Response, Request } from "express";
import { container } from "tsyringe";

import { SwapAvailableInBrokerUseCase } from "./SwapAvailableInBrokerUseCase";

export class SwapAvailableInBrokerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { swaps } = request.body;

        const swapAvailableInBrokerUseCase = container.resolve(
            SwapAvailableInBrokerUseCase
        );

        // FIXME: The ID can be undefined

        const swap = await swapAvailableInBrokerUseCase.execute({
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            brokerId: id!,
            swaps,
        });

        return response.json(swap);
    }
}
