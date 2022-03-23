import { ICreateSocialProfileDTO } from "../dtos/ICreateSocialProfileDTO";
import { SocialProfile } from "../typeorm/entities/SocialProfile";

interface ISocialProfilesRepository {
    create(data: ICreateSocialProfileDTO): Promise<SocialProfile>;
}

export { ISocialProfilesRepository };
