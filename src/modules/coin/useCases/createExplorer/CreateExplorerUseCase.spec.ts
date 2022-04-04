import { ExplorerRepositoryInMemory } from "@modules/coin/repositories/in-memory/ExplorerRepositoryInMemory";

import { CreateExplorerUseCase } from "./CreateExplorerUseCase";

let createExplorerUseCase: CreateExplorerUseCase;
let explorerRepositoryInMemory: ExplorerRepositoryInMemory;

describe("Create a cryptocurrency explorer", () => {
    beforeEach(() => {
        explorerRepositoryInMemory = new ExplorerRepositoryInMemory();
        createExplorerUseCase = new CreateExplorerUseCase(
            explorerRepositoryInMemory
        );
    });

    it("should create a new explorer profile", async () => {
        const explorer = await createExplorerUseCase.execute({
            name: "John Sample",
            description: "The github account of John Sample",
            url: "http://github.com/johnsample",
        });

        expect(explorer).toHaveProperty("id");
    });
});
