import { Swap } from "@modules/swap/typeorm/entities/Swap";

 export interface ICreateBrokerDTO {
    id?: string;
    name: string;
    description: string;
    slug: string;
    logo: string;
    dateLaunched: Date;
    swaps?: Swap[];
}
