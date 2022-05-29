import type { Swap } from "@modules/swap/entities/Swap";

export interface ICreateBrokerDTO {
    id?: string;
    name: string;
    description: string;
    slug: string;
    logo: string;
    dateLaunched: Date;
    swaps?: Swap[];
}
