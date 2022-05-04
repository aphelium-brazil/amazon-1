import type { MigrationInterface, QueryRunner } from 'typeorm';
import { TableForeignKey } from 'typeorm';
import { Table } from 'typeorm';

export class techDocs1651664920276 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'techDocs',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true
					},
					{
						name: 'title',
						type: 'varchar',
						isUnique: true
					},
					{
						name: 'description',
						type: 'varchar',
						isNullable: true
					},
					{
						name: 'url',
						type: 'varchar'
					},
					{
						name: 'coinId',
						type: 'uuid'
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

		await queryRunner.createForeignKey(
			'techDocs',
			new TableForeignKey({
				name: 'FKTechDocsCoins',
				referencedTableName: 'coins',
				referencedColumnNames: ['id'],
				columnNames: ['coinId'],
				onDelete: 'SET NULL',
				onUpdate: 'SET NULL'
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('techDocs', 'FKTechDocsCoins');
		await queryRunner.dropTable('techDocs');
	}
}
