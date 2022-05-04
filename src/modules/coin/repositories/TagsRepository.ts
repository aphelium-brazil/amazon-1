import type { Repository } from 'typeorm';
import { getRepository } from 'typeorm';
import type { ICreateTagDTO } from '../dtos/ICreateTagDTO';
import type { ITagsRepository } from './interfaces/ITagsRepository';
import { Tag } from '../entities/Tag';
export class TagsRepository implements ITagsRepository {
	private readonly repository: Repository<Tag>;

	constructor() {
		this.repository = getRepository(Tag);
	}

	async create({ name, description }: ICreateTagDTO): Promise<Tag> {
		const tag = this.repository.create({
			name,
			description
		});

		await this.repository.save(tag);
		return tag;
	}
}
