import { v4 as uuidV4 } from "uuid";

export class SocialProfile {
    id!: string;

    name!: string;

    description!: string;

    url!: string;

    username!: string;

    socialNetwork!: string;

    official!: boolean;

    createdAt!: Date;

    updatedAt!: Date;

    deletedAt!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
        if (this.id) {
            this.updatedAt = new Date();
        }
    }
}
