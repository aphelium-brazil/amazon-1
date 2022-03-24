import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class cryptosSwap1648148203461 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cryptosSwap",
                columns: [
                    {
                        name: "swapId",
                        type: "uuid",
                    },
                    {
                        name: "fromId",
                        type: "uuid",
                    },
                    {
                        name: "toId",
                        type: "uuid",
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
                foreignKeys: [
                    {
                        name: "FKSwapId",
                        referencedTableName: "swaps",
                        referencedColumnNames: ["id"],
                        columnNames: ["swapId"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKCryptoFromId",
                        referencedTableName: "cryptocurrencies",
                        referencedColumnNames: ["id"],
                        columnNames: ["fromId"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKCryptoToId",
                        referencedTableName: "cryptocurrencies",
                        referencedColumnNames: ["id"],
                        columnNames: ["toId"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cryptosSwap");
    }
}
