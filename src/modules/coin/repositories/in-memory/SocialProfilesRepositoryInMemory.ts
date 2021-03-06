import type { ICreateSocialProfileDTO } from '@modules/coin/dtos/ICreateSocialProfileDTO';
import { SocialProfile } from '@modules/coin/entities/SocialProfile';
import type { ISocialProfileRepository } from '../interfaces/ISocialProfileRepository';

export class SocialProfilesRepositoryInMemory implements ISocialProfileRepository {
	socialProfiles: SocialProfile[] = [];

	async create({
		name,
		description,
		url,
		username,
		socialNetwork,
		official
	}: ICreateSocialProfileDTO): Promise<SocialProfile> {
		const socialProfile = new SocialProfile();

		Object.assign(socialProfile, {
			name,
			description,
			url,
			username,
			socialNetwork,
			official
		});

		this.socialProfiles.push(socialProfile);

		return socialProfile;
	}
}
