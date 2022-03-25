import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

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
                        name: "cryptoId",
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
            })
        );

        await queryRunner.createForeignKey(
            "cryptosSwap",
            new TableForeignKey({
                name: "FKSwapId",
                referencedTableName: "swaps",
                referencedColumnNames: ["id"],
                columnNames: ["swapId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "cryptosSwap",
            new TableForeignKey({
                name: "FKCryptosId",
                referencedTableName: "cryptocurrencies",
                referencedColumnNames: ["id"],
                columnNames: ["cryptoId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("cryptosSwap", "FKCryptosId");
        await queryRunner.dropForeignKey("cryptosSwap", "FKSwapId");
        await await queryRunner.dropTable("cryptosSwap");
    }
}
