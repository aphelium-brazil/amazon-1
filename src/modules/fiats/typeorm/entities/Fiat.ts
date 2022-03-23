import { Coin } from "@modules/coin/typeorm/entities/Coin";
import { Column, Entity } from "typeorm";

@Entity("fiats")
class Fiat extends Coin {
    @Column()
    country: string;
}

export { Fiat };
