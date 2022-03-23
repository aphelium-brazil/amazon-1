import { ICreateSocialProfileDTO } from "@modules/cryptocurrencies/dtos/ICreateSocialProfileDTO";
import { ISocialProfilesRepository } from "@modules/cryptocurrencies/repositories/ISocialProfileRepository";
import { SocialProfile } from "@modules/cryptocurrencies/typeorm/entities/SocialProfile";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateSocialProfileUseCase {
    constructor(
        @inject("SocialProfilesRepository")
        private socialProfile: ISocialProfilesRepository
    ) {}

    async execute({
        name,
        description,
        url,
        username,
        socialNetwork,
        official,
    }: ICreateSocialProfileDTO): Promise<SocialProfile> {
        const socialProfile = await this.socialProfile.create({
            name,
            description,
            url,
            username,
            socialNetwork,
            official,
        });

        return socialProfile;
    }
}

export { CreateSocialProfileUseCase };
