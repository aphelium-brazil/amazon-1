import { Fiat } from "@modules/fiats/typeorm/entities/Fiat";
import { Entity, JoinTable, ManyToMany } from "typeorm";
import { Swap } from "./Swap";

@Entity("FiatsSwap")
class FiatsSwap extends Swap {
    @ManyToMany(() => Fiat)
    @JoinTable()
    fiats: Fiat[];
}

export { FiatsSwap };
