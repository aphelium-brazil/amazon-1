import type { IntervalEnums } from "../enums/IntervalEnums";

export interface ICreateKlineDTO {
    interval: IntervalEnums;
    swapId: string;
    brokerId: string;
}
