import { SwapTypesEnum } from "../enums/SwapTypesEnum";

export interface ICreateSwapRelationDTO {
    swapId: string;
    fromId: string;
    toId: string;
}
