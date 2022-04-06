import { inject, injectable } from "tsyringe";
import { Tag } from "@modules/coin/entities/Tag";
import { ITagsRepository } from "@modules/coin/repositories/interfaces/ITagsRepository";
import { ICreateTagDTO } from "@modules/coin/dtos/ICreateTagDTO";

@injectable()
export class CreateTagUseCase { 
    constructor(
        @inject("TagRepository")
        private tag: ITagsRepository
    ) {}
    
    async execute ({
        name,
        description,
    }: ICreateTagDTO): Promise<Tag> {
        const tag = await this.tag.create({
            name,
            description,
        });
        
        return tag;
    }
}