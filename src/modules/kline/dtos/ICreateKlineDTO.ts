interface ICreateKlineDTO {
    interval: string;
    swapId: string;
    brokerId: string;
    candles?: any[];
}

export { ICreateKlineDTO };
