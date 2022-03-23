import { SocialProfilesRepositoryInMemory } from "@modules/cryptocurrencies/repositories/in-memory/SocialProfileRepositoryInMemory";
import { CreateSocialProfileUseCase } from "./CreateSocialProfileUseCase";

let createSocialProfilesUseCase: CreateSocialProfileUseCase;
let socialProfilesRepositoryInMemory: SocialProfilesRepositoryInMemory;

describe("Create a cryptocurrency social profile", () => {
    beforeEach(() => {
        socialProfilesRepositoryInMemory = new SocialProfilesRepositoryInMemory();
        createSocialProfilesUseCase = new CreateSocialProfileUseCase(
            socialProfilesRepositoryInMemory
        );
    });

    it("should create a new social profile", async () => {
        const socialProfile = await createSocialProfilesUseCase.execute({
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
