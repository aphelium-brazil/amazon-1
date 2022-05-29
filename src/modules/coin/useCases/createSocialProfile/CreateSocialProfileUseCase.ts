import type { ICreateSocialProfileDTO } from "@modules/coin/dtos/ICreateSocialProfileDTO";
import { ISocialProfileRepository } from "@modules/coin/repositories/interfaces/ISocialProfileRepository";
import type { SocialProfile } from "@modules/coin/entities/SocialProfile";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateSocialProfileUseCase {
    constructor(
        @inject("SocialProfileRepository")
        private readonly socialProfile: ISocialProfileRepository
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
