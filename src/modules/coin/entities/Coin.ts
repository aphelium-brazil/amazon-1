import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

import { v4 as uuidV4 } from "uuid";

@Entity("coins")
export class Coin {
    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    symbol!: string;

    @Column()
    isFiat!: boolean;

    @Column()
    country!: string;

    @Column()
    logo!: string;

    @Column()
    isActive!: boolean;

    @Column()
    firstHistoricalData!: string;

    @Column()
    lastHistoricalData!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
