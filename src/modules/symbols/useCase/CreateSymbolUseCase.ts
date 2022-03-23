interface IRequest {
    name: string;
    coinFromId: string;
    coinToId: string;
    brokeId: string;
    url: string;
}

class CreateSymbolUseCase {
    async execute({
        name,
        coinFromId,
        coinToId,
        brokeId,
        url,
    }: IRequest): Promise<void> {}
}

export { CreateSymbolUseCase };
