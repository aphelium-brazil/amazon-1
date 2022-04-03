import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class fiats1647898096308 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "coins",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },

                    {
                        name: "logo",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "country",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "symbol",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "isActive",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "isFiat",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "firstHistoricalData",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "lastHistoricalData",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("coins");
    }
}
