import { ICreateSocialProfileDTO } from "@modules/coin/dtos/ICreateSocialProfileDTO";
import { SocialProfile } from "@modules/coin/entities/SocialProfile";

export interface ISocialProfileRepository {
    create(data: ICreateSocialProfileDTO): Promise<SocialProfile>;
}
