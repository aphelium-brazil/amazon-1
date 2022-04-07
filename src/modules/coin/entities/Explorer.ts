import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('explorers')
export class Explorer {
	@PrimaryColumn()
	id!: string;

	@Column()
	name!: string;

	@Column()
	description!: string;

	@Column()
	url!: string;

	constructor() {
		if (!this.id) {
			this.id = uuidV4();
		}
	}
}
