import { Swap } from '@modules/swap/entities/Swap';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryColumn,
	UpdateDateColumn
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('brokers')
export class Broker {
	@PrimaryColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	slug: string;

	@Column()
	logo: string;

	@Column()
	dateLaunched: Date;

	@ManyToMany(() => Swap)
	@JoinTable({
		name: 'swapsBrokers',
		joinColumn: {
			name: 'brokerId',
			referencedColumnName: 'id'
		},
		inverseJoinColumn: {
			name: 'swapId',
			referencedColumnName: 'id'
		}
	})
	swaps: Swap[];

	// @ManyToMany(() => Coin)
	// @JoinTable({
	//     name: "swapsCoins",
	//     joinColumn: {
	//         name: "brokerId",
	//         referencedColumnName: "id",
	//     },
	//     inverseJoinColumn: {
	//         name: "swapId",
	//         referencedColumnName: "id",
	//     },
	// })
	// coins: Coin[];

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
