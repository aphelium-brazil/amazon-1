import type { ICreateSocialProfileDTO } from "@modules/coin/dtos/ICreateSocialProfileDTO";
import type { ISocialProfileRepository } from "@modules/coin/repositories/interfaces/ISocialProfileRepository";
import type { Repository } from "typeorm";
import { getRepository } from "typeorm";

import { SocialProfile } from "../entities/SocialProfile";

export class SocialProfilesRepository implements ISocialProfileRepository {
    private readonly repository: Repository<SocialProfile>;

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
