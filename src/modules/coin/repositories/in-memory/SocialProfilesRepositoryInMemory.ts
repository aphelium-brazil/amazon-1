import { ICreateSocialProfileDTO } from "@modules/coin/dtos/ICreateSocialProfileDTO";
import { SocialProfile } from "@modules/coin/typeorm/entities/SocialProfile";
import { ISocialProfileRepository } from "../ISocialProfileRepository";

export class SocialProfilesRepositoryInMemory implements ISocialProfileRepository {
    socialProfiles: SocialProfile[] = [];

    async create({
        name,
        description,
        url,
        username,
        socialNetwork,
        official,
    }: ICreateSocialProfileDTO): Promise<SocialProfile> {
        const socialProfile = new SocialProfile();

        Object.assign(socialProfile, {
            name,
            description,
            url,
            username,
            socialNetwork,
            official,
        });

        this.socialProfiles.push(socialProfile);

        return socialProfile;
    }
}
