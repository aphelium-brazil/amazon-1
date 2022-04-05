import { IntervalEnums } from '@modules/kline/enums/IntervalEnums';
import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('klines')
export class Kline {
	@PrimaryColumn()
	id: string;

	@Column({
		type: 'enum',
		enum: IntervalEnums
	})
	interval: IntervalEnums;

	@Column()
	swapId: string;

	@Column()
	brokerId: string;

	candles?: any[];

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
