import { v4 as uuidV4 } from "uuid";

class SocialProfile {
    id: string;
    name: string;
    description: string;
    url: string;
    username: string;
    socialNetwork: string;
    official: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { SocialProfile };
