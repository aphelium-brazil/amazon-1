import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCryptocurrencyUseCase } from "./CreateCryptocurrencyUseCase";

class CreateCryptocurrencyController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            description,
            logo,
            symbol,
            slug,
            sign,
            isActive,
            firstHistoricalData,
            lastHistoricalData,
            platformName,
            platformDescription,
            platformSymbol,
            platformSlug,
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

        const createCryptocurrencyUseCase = container.resolve(
            CreateCryptocurrencyUseCase
        );

        await createCryptocurrencyUseCase.execute({
            name,
            description,
            logo,
            symbol,
            slug,
            sign,
            isActive,
            firstHistoricalData,
            lastHistoricalData,
            platformName,
            platformDescription,
            platformSymbol,
            platformSlug,
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

export { CreateCryptocurrencyController };
