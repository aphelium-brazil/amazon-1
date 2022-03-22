import { CreateSocialProfileUseCase } from "./CreateSocialProfileUseCase";
import { SocialProfileRepositoryInMemory } from "../../repositories/in-memory/SocialProfileRepositoryInMemory";

let createSocialProfileUseCase: CreateSocialProfileUseCase;
let socialProfileRepositoryInMemory: SocialProfileRepositoryInMemory;

describe("Create a cryptocurrency social profile", () => {
    beforeEach(() => {
        socialProfileRepositoryInMemory = new SocialProfileRepositoryInMemory();
        createSocialProfileUseCase = new CreateSocialProfileUseCase(
            socialProfileRepositoryInMemory
        );
    });

    it("should create a new social profile", async () => {
        const socialProfile = await createSocialProfileUseCase.execute({
            name: "John Sample",
            description: "The twitter account of John Sample",
            url: "http://twitter.com/johnsample",
            username: "jsample",
            socialNetwork: "Twiter",
            official: true,
        });

        expect(socialProfile).toHaveProperty("id");
    });
});
