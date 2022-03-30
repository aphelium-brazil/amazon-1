import { ICreateSocialProfileDTO } from "@modules/coin/dtos/ICreateSocialProfileDTO";
import { ISocialProfileRepository } from "@modules/coin/repositories/ISocialProfileRepository";
import { getRepository, Repository } from "typeorm";
import { SocialProfile } from "../entities/SocialProfile";
export 
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