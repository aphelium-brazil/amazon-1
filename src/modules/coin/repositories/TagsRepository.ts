import { getRepository, Repository } from "typeorm";
import { ICreateTagDTO } from "../dtos/ICreateTagDTO";
import { ITagsRepository } from "./interfaces/ITagsRepository";
import { Tag } from "../entities/Tag";
export class TagsRepository implements ITagsRepository {
    private repository: Repository<Tag>;

    constructor() {
        this.repository = getRepository(Tag);
    }

    async create({
        name,
        description,
    }: ICreateTagDTO): Promise<Tag> {
        const tag = this.repository.create({
            name,
            description,
        });

        await this.repository.save(tag);
        return tag;
    }
}