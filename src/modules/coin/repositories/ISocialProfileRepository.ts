import { ICreateSocialProfileDTO } from "../dtos/ICreateSocialProfileDTO";
import { SocialProfile } from "../entities/SocialProfile";

export interface ISocialProfileRepository {
    create(data: ICreateSocialProfileDTO): Promise<SocialProfile>;
}
