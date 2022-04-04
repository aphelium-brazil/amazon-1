import { Coin } from "@modules/coin/typeorm/entities/Coin";
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("swaps")
export class Swap {
    @PrimaryColumn()
    id: string;

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
        name: "swapsCoins",
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
