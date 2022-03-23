<<<<<<< HEAD:src/modules/cryptocurrencies/typeorm/repositories/SocialProfileRepository.ts
import { ICreateSocialProfileDTO } from "@modules/cryptocurrencies/dtos/ICreateSocialProfileDTO";
import { ISocialProfilesRepository } from "@modules/cryptocurrencies/repositories/ISocialProfilesRepository";
import { getRepository, Repository } from "typeorm";
import { SocialProfile } from "../entities/SocialProfile";

class SocialProfilesRepository implements ISocialProfilesRepository {
    private repository: Repository<SocialProfile>;

    constructor() {
        this.repository = getRepository(SocialProfile);
    }

    async create({
        name,
        description,
        url,
        username,
        socialNetwork,
        official,
    }: ICreateSocialProfileDTO): Promise<SocialProfile> {
        const socialProfile = this.repository.create({
            name,
            description,
            url,
            username,
            socialNetwork,
            official,
        });

        await this.repository.save(socialProfile);
        return socialProfile;
    }
}

export { SocialProfilesRepository };
=======
import { ICreateSocialProfileDTO } from "@modules/cryptocurrencies/dtos/ICreateSocialProfileDTO";
import { ISocialProfileRepository } from "@modules/cryptocurrencies/repositories/ISocialProfileRepository";
import { getRepository, Repository } from "typeorm";
import { SocialProfile } from "../entities/SocialProfile";

class SocialProfilesRepository implements ISocialProfileRepository {
    private repository: Repository<SocialProfile>;

    constructor() {
        this.repository = getRepository(SocialProfile);
    }

    async create({
        name,
        description,
        url,
        username,
        socialNetwork,
        official,
    }: ICreateSocialProfileDTO): Promise<SocialProfile> {
        const socialProfile = this.repository.create({
            name,
            description,
            url,
            username,
            socialNetwork,
            official,
        });

        await this.repository.save(socialProfile);
        return socialProfile;
    }
}

export { SocialProfilesRepository };
>>>>>>> cbd569d4d34495f4e74aba1188af41dd8e61ee8a:src/modules/cryptocurrencies/typeorm/repositories/SocialProfilesRepository.ts
