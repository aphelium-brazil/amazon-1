import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class klines1648575518837 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'klines',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true
					},
					{
						name: 'interval',
						type: 'enum',
						enum: [
							'1m',
							'3m',
							'5m',
							'15m',
							'30m',
							'1h',
							'2h',
							'4h',
							'6h',
							'8h',
							'12h',
							'1d',
							'3d',
							'1w',
							'1M'
						]
					},
					{
						name: 'swapId',
						type: 'uuid'
					},
					{
						name: 'brokerId',
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
			'klines',
			new TableForeignKey({
				name: 'FKSwapKlinesId',
				referencedTableName: 'swaps',
				referencedColumnNames: ['id'],
				columnNames: ['swapId'],
				onDelete: 'SET NULL',
				onUpdate: 'SET NULL'
			})
		);

		await queryRunner.createForeignKey(
			'klines',
			new TableForeignKey({
				name: 'FKBrokerKlinesId',
				referencedTableName: 'brokers',
				referencedColumnNames: ['id'],
				columnNames: ['brokerId'],
				onDelete: 'SET NULL',
				onUpdate: 'SET NULL'
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('klines', 'FKBrokerKlinesId');
		await queryRunner.dropForeignKey('klines', 'FKSwapKlinesId');
		await queryRunner.dropTable('klines');
	}
}
