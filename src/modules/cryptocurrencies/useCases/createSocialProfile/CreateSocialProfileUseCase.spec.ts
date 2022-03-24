import { CreateSocialProfileUseCase } from "./CreateSocialProfileUseCase";
import { SocialProfilesRepositoryInMemory } from "../../repositories/in-memory/SocialProfilesRepositoryInMemory";

let createSocialProfileUseCase: CreateSocialProfileUseCase;
let socialProfilesRepositoryInMemory: SocialProfilesRepositoryInMemory;

describe("Create a cryptocurrency social profile", () => {
    beforeEach(() => {
        socialProfilesRepositoryInMemory =
            new SocialProfilesRepositoryInMemory();
        createSocialProfileUseCase = new CreateSocialProfileUseCase(
            socialProfilesRepositoryInMemory
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
