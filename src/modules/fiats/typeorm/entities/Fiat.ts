import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("fiats")
class Fiat {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    country: string;
    @Column()
    description: string;
    @Column()
    symbol: string;
    @Column()
    sign: string;
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

export { Fiat };
