import { Coin } from "@modules/coin/typeorm/entities/Coin";
import { Swap } from "@modules/swap/typeorm/entities/Swap";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity("fiats")
class Fiat extends Coin {
    @Column()
    country: string;
}

export { Fiat };
