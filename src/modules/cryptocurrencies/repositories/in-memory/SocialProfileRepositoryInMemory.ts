import { ICreateSocialProfileDTO } from "@modules/cryptocurrencies/dtos/ICreateSocialProfileDTO";
import { SocialProfile } from "@modules/cryptocurrencies/typeorm/entities/SocialProfile";
import { ISocialProfilesRepository } from "../ISocialProfilesRepository";

class SocialProfilesRepositoryInMemory implements ISocialProfilesRepository {
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

export { SocialProfilesRepositoryInMemory };
