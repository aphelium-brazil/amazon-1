import type { ICreateTagDTO } from '@modules/coin/dtos/ICreateTagDTO';
import { Tag } from '@modules/coin/entities/Tag';
import type { ITagsRepository } from '../interfaces/ITagsRepository';

export class TagRepositoryInMemory implements ITagsRepository {
	tags: Tag[] = [];

	async create({ name, description }: ICreateTagDTO): Promise<Tag> {
		const tag = new Tag();

		Object.assign(tag, {
			name,
			description
		});

		this.tags.push(tag);

		return tag;
	}
}
