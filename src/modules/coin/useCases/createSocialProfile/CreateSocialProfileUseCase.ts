import { ICreateSocialProfileDTO } from "@modules/coin/dtos/ICreateSocialProfileDTO";
import { ISocialProfileRepository } from "@modules/coin/repositories/ISocialProfileRepository";
import { SocialProfile } from "@modules/coin/typeorm/entities/SocialProfile";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateSocialProfileUseCase {
    constructor(
        @inject("SocialProfileRepository")
        private socialProfile: ISocialProfileRepository
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