import type { ICreateSocialProfileDTO } from '@modules/coin/dtos/ICreateSocialProfileDTO';
import type { SocialProfile } from '@modules/coin/entities/SocialProfile';

export interface ISocialProfileRepository {
	create(data: ICreateSocialProfileDTO): Promise<SocialProfile>;
}
