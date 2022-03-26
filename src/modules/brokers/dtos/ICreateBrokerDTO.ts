import { Swap } from "@modules/swap/typeorm/entities/Swap";

interface ICreateBrokerDTO {
    id?: string;
    name: string;
    description: string;
    slug: string;
    logo: string;
    dateLaunched: Date;
    swaps?: Swap[];
}

export { ICreateBrokerDTO };
