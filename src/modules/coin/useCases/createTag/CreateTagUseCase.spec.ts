import { TagRepositoryInMemory } from "@modules/coin/repositories/in-memory/TagRepositoryInMemory";
import { CreateTagUseCase } from "./CreateTagUseCase";

let createTagUseCase: CreateTagUseCase;
let tagRepositoryInMemory: TagRepositoryInMemory;

describe("Tag", () => {
    beforeEach(() => {
        tagRepositoryInMemory = new TagRepositoryInMemory();
        createTagUseCase = new CreateTagUseCase(
            tagRepositoryInMemory
        );
    });

    it("should create a new tag profile", async () => {
        const tag = await createTagUseCase.execute({
            name: "John Sample",
            description: "The github account of John Sample",
        });
            
        expect(tag).toHaveProperty("id");
    });
});
        