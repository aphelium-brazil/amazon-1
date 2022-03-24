import { v4 as uuidV4 } from "uuid";

import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("swaps")
class Swap {
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

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Swap };
