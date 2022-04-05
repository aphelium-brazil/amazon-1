import { UpdateCoinUseCase } from "./UpdateCoinUseCase";

let updateCoinUseCase: UpdateCoinUseCase;

describe("Coin", () => {
    beforeEach(() => {
        updateCoinUseCase = new UpdateCoinUseCase();
    });

    describe("Update coin", () => {
        it("should update a coin", async () => {
            expect(1).toBe(1);
        });
    });
});
