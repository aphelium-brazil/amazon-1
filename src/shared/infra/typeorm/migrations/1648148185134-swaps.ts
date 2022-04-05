import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class swaps1648148185134 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'swaps',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true
					},
					{
						name: 'name',
						type: 'varchar',
						isUnique: true
					},
					{
						name: 'isActive',
						type: 'boolean',
						default: false
					},
					{
						name: 'createdAt',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'updatedAt',
						type: 'timestamp',
						default: 'now()'
					}
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('swaps');
	}
}
