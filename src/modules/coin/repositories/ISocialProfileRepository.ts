import { ICreateSocialProfileDTO } from "../dtos/ICreateSocialProfileDTO";
import { SocialProfile } from "../typeorm/entities/SocialProfile";

interface ISocialProfileRepository {
    create(data: ICreateSocialProfileDTO): Promise<SocialProfile>;
}

export { ISocialProfileRepository };
