import { Entity, JoinTable, ManyToMany } from "typeorm";
import { Cryptocurrency } from "@modules/cryptocurrencies/typeorm/entities/Cryptocurrency";
import { Swap } from "./Swap";
import { Fiat } from "@modules/fiats/typeorm/entities/Fiat";

@Entity("swaps")
class SwapFiats extends Swap {
    @ManyToMany(() => Cryptocurrency)
    @JoinTable({
        name: "cryptosSwap",
        joinColumns: [{ name: "swapId" }],
        inverseJoinColumns: [{ name: "cryptoId" }],
    })
    coins: Fiat[];
}

export { SwapFiats };
