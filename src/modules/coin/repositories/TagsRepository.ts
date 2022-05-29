import type { ICreateTagDTO } from "../dtos/ICreateTagDTO";
import type { ITagsRepository } from "./interfaces/ITagsRepository";
import type { Tag } from "../entities/Tag";
export class TagsRepository implements ITagsRepository {
    create(data: ICreateTagDTO): Promise<Tag> {
        throw new Error("Method not implemented.");
    }
}
