import { SwapTypesEnum } from "../enums/SwapTypesEnum";

interface ICreateSwapRelationDTO {
    type: string;
    swapId: string;
    fromId: string;
    toId: string;
}
export { ICreateSwapRelationDTO };
