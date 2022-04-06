import { ICreateTagDTO } from "@modules/coin/dtos/ICreateTagDTO";
import { Tag } from "@modules/coin/entities/Tag";

export interface ITagsRepository {
    create(data: ICreateTagDTO): Promise<Tag>;
}