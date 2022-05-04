import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('techDocs')
export class TechDoc {
	@PrimaryColumn()
	id!: string;

	@Column()
	title!: string;

	@Column()
	description!: string;

	@Column()
	url!: string;

	@Column()
	coinId!: string;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidV4();
			this.createdAt = new Date();
			this.updatedAt = new Date();
		}
		if (this.id) {
			this.updatedAt = new Date();
		}
	}
}
