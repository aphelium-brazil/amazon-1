import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("socialProfiles")
export class SocialProfile {
    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    url!: string;

    @Column()
    username!: string;

    @Column()
    socialNetwork!: string;

    @Column()
    official!: boolean;

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
