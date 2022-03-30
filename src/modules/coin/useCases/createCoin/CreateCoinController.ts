import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCoinUseCase } from "./CreateCoinUseCase";
export 
class CreateCoinController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            isFiat,
            country,
            description,
            logo,
            symbol,
            isActive,
            firstHistoricalData,
            lastHistoricalData,
            platformName,
            platformDescription,
            platformTokenAddress,
            websiteName,
            websiteDescription,
            websiteUrl,
            sourceCodeName,
            sourceCodeUrl,
            techDocName,
            techDocDescription,
            techDocFile,
            techDocUrl,
            techDocCreatedAt,
            techDocUpdatedAt,
            categoryName,
            categoryDescription,
        } = request.body;

        const createCoinUseCase = container.resolve(CreateCoinUseCase);

        await createCoinUseCase.execute({
            name,
            isFiat,
            country,
            description,
            logo,
            symbol,
            isActive,
            firstHistoricalData,
            lastHistoricalData,
            platformName,
            platformDescription,
            platformTokenAddress,
            websiteName,
            websiteDescription,
            websiteUrl,
            sourceCodeName,
            sourceCodeUrl,
            techDocName,
            techDocDescription,
            techDocFile,
            techDocUrl,
            techDocCreatedAt,
            techDocUpdatedAt,
            categoryName,
            categoryDescription,
        });

        return response.status(201).send();
    }
}
