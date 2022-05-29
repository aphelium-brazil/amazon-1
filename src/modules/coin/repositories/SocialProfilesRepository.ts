import type { ICreateSocialProfileDTO } from "@modules/coin/dtos/ICreateSocialProfileDTO";
import type { ISocialProfileRepository } from "@modules/coin/repositories/interfaces/ISocialProfileRepository";

import type { SocialProfile } from "../entities/SocialProfile";

export class SocialProfilesRepository implements ISocialProfileRepository {
    create(data: ICreateSocialProfileDTO): Promise<SocialProfile> {
        throw new Error("Method not implemented.");
    }
}
