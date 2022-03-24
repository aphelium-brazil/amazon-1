import { AppError } from "@shared/errors/AppError";
import { FiatsRepositoryInMemory } from "../../repositories/in-memory/FiatsRepositoryInMemory";
import { CreateFiatUseCase } from "./CreateFiatUseCase";

let createFiatUseCase: CreateFiatUseCase;
let fiatsRepositoryInMemory: FiatsRepositoryInMemory;

describe("Create Fiat", () => {
    beforeEach(() => {
        fiatsRepositoryInMemory = new FiatsRepositoryInMemory();
        createFiatUseCase = new CreateFiatUseCase(fiatsRepositoryInMemory);
    });

    it("should create a new fiat", async () => {
        const fiat = await createFiatUseCase.execute({
            name: "string",
            country: "string",
            description: "string",
            symbol: "string",
            sign: "string",
        });

        expect(fiat).toHaveProperty("id");
    });

    it("should not create fiat if exists one with the same name", async () => {
        await createFiatUseCase.execute({
            name: "string",
            country: "string",
            description: "string",
            symbol: "string",
            sign: "string",
        });

        await expect(
            createFiatUseCase.execute({
                name: "string",
                country: "string",
                description: "string",
                symbol: "string",
                sign: "string",
            })
        ).rejects.toEqual(new AppError("Fiat already exists!"));
    });
});
