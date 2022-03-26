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
import { Coin } from "@modules/coin/typeorm/entities/Coin";
@Entity("swaps")
class Swap {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => Coin)
    @JoinTable({
        name: "swapsCoins", // table name for the junction table of this relation
        joinColumn: {
            name: "swapId",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "coinId",
            referencedColumnName: "id",
        },
    })
    coins: Coin[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Swap };
