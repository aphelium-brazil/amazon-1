import { Entity, JoinTable, ManyToMany } from "typeorm";
import { Cryptocurrency } from "@modules/cryptocurrencies/typeorm/entities/Cryptocurrency";
import { Swap } from "./Swap";

@Entity("swaps")
class SwapCryptos extends Swap {
    @ManyToMany(() => Cryptocurrency)
    @JoinTable({
        name: "cryptosSwap",
        joinColumns: [{ name: "swapId" }],
        inverseJoinColumns: [{ name: "cryptoId" }],
    })
    coins: Cryptocurrency[];
}

export { SwapCryptos };
