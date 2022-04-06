import { ICreateTagDTO } from "@modules/coin/dtos/ICreateTagDTO";

export interface ITagsRepository {
    create(data: ICreateTagDTO): Promise<Tag>;
}