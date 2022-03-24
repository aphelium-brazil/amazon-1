import { Cryptocurrency } from "@modules/cryptocurrencies/typeorm/entities/Cryptocurrency";
import { Entity, JoinTable, ManyToMany } from "typeorm";
import { Swap } from "./Swap";

@Entity("CryptosSwap")
class CryptosSwap extends Swap {
    @ManyToMany(() => Cryptocurrency)
    @JoinTable({
        name: "cryptosSwap",
        joinColumns: [{ name: "fromId" }, { name: "toId" }],
        inverseJoinColumns: [{ name: "swapId" }],
    })
    cryptocurrencies: Cryptocurrency[];
}

export { CryptosSwap };
