import { v4 as uuidV4 } from "uuid";

import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { Cryptocurrency } from "@modules/cryptocurrencies/typeorm/entities/Cryptocurrency";
import { Fiat } from "@modules/fiats/typeorm/entities/Fiat";

@Entity("swaps")
class Swap {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    isActive: boolean;

    coins: any;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Swap };
