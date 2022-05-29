import type { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSocialProfileUseCase } from "./CreateSocialProfileUseCase";

export class CreateSocialProfileController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, url, username, socialNetwork, official } =
            request.body;

        const createSocialProfileUseCase = container.resolve(
            CreateSocialProfileUseCase
        );

        await createSocialProfileUseCase.execute({
            name,
            description,
            url,
            username,
            socialNetwork,
            official,
        });

        return response.status(201).send();
    }
}
