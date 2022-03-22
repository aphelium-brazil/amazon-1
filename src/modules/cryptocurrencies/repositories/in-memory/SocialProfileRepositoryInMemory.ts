import { ICreateSocialProfileDTO } from "@modules/cryptocurrencies/dtos/ICreateSocialProfileDTO";
import { SocialProfile } from "@modules/cryptocurrencies/typeorm/entities/SocialProfile";
import { ISocialProfileRepository } from "../ISocialProfileRepository";

class SocialProfileRepositoryInMemory implements ISocialProfileRepository {
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

export { SocialProfileRepositoryInMemory };
