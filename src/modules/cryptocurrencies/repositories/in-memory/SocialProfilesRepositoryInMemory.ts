<<<<<<< HEAD:src/modules/cryptocurrencies/repositories/in-memory/SocialProfileRepositoryInMemory.ts
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
=======
import { ICreateSocialProfileDTO } from "@modules/cryptocurrencies/dtos/ICreateSocialProfileDTO";
import { SocialProfile } from "@modules/cryptocurrencies/typeorm/entities/SocialProfile";
import { ISocialProfileRepository } from "../ISocialProfileRepository";

class SocialProfilesRepositoryInMemory implements ISocialProfileRepository {
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
>>>>>>> cbd569d4d34495f4e74aba1188af41dd8e61ee8a:src/modules/cryptocurrencies/repositories/in-memory/SocialProfilesRepositoryInMemory.ts
