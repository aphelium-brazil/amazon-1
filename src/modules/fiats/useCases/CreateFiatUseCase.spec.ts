import { FiatsRepositoryInMemory } from "../repositories/in-memory/FiatsRepositoryInMemory";
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

        console.log(fiat);

        expect(fiat).toHaveProperty("id");
    });
});
