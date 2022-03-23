import { CreateSymbolUseCase } from "./CreateSymbolUseCase";

describe("Create symbol", () => {
    let createSymbolUseCase: CreateSymbolUseCase;

    beforeEach(() => {
        createSymbolUseCase = new CreateSymbolUseCase();
    });

    it("should create a new symbol", () => {
        const symbol = createSymbolUseCase.execute({
            name: "string",
            coinFromId: "uuid",
            coinToId: "uuid",
            brokeId: "uuid",
            url: "string",
            createAt: Date.now(),
            updateAt: Date.now(),
        });

        expect(symbol).toHaveProperty("id");
    });
});
