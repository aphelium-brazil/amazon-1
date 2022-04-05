import { CoinRepositoryInMemory } from "@modules/coin/repositories/in-memory/CoinRepositoryInMemory";

import { CreateCoinUseCase } from "../createCoin/CreateCoinUseCase";
import { FindCoinByIdUseCase } from "./ListCoinsUseCase";

describe("Coin", () => {
    let createCoinUseCase: CreateCoinUseCase;
    let findCoinByIdUseCase: FindCoinByIdUseCase;
    let coinRepositoryInMemory: CoinRepositoryInMemory;

    beforeEach(() => {
        coinRepositoryInMemory = new CoinRepositoryInMemory();
        createCoinUseCase = new CreateCoinUseCase(coinRepositoryInMemory);
        findCoinByIdUseCase = new FindCoinByIdUseCase(coinRepositoryInMemory);
    });

    describe("FindCoinByIdUseCase", () => {
        it("should be defined", async () => {
            const coin = await createCoinUseCase.execute({
                name: "string",
                isFiat: false,
                description: "string",
                logo: "string",
                symbol: "string",
                isActive: true,
                firstHistoricalData: "string",
                lastHistoricalData: "string",
            });

            const result = await findCoinByIdUseCase.execute(coin.id);

            expect(result.id).toBe(coin.id);
        });
    });
});
