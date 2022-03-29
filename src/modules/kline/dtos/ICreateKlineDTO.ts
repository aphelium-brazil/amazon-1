import { IntervalEnums } from "../enums/IntervalEnums";

interface ICreateKlineDTO {
    interval: IntervalEnums;
    swapId: string;
    brokerId: string;
    candles?: any[];
}

export { ICreateKlineDTO };
