import { inject, injectable } from 'tsyringe';
import type { Tag } from '@modules/coin/entities/Tag';
import { ITagsRepository } from '@modules/coin/repositories/interfaces/ITagsRepository';
import type { ICreateTagDTO } from '@modules/coin/dtos/ICreateTagDTO';

@injectable()
export class CreateTagUseCase {
	constructor(
		@inject('TagRepository')
		private readonly tag: ITagsRepository
	) {}

	execute({ name, description }: ICreateTagDTO): Promise<Tag> {
		return this.tag.create({
			name,
			description
		});
	}
}
