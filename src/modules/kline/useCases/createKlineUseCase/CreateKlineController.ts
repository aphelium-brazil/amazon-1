import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateKlineUseCase } from "./CreateKlineUseCase";

class CreateKlineController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { interval, brokerId, swapId } = request.body;

        const createKlineUseCase = container.resolve(CreateKlineUseCase);

        await createKlineUseCase.execute({
            interval,
            brokerId,
            swapId,
        });

        return response.status(201).send();
    }
}

export { CreateKlineController };
