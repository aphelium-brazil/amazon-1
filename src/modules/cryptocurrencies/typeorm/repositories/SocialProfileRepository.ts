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
