import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class cryptoFiatSwap1648202511848 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cryptoFiatSwap",
                columns: [
                    {
                        name: "swapId",
                        type: "uuid",
                    },
                    {
                        name: "coinsId",
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
            "cryptoFiatSwap",
            new TableForeignKey({
                name: "FKSwapCryptoFiatId",
                referencedTableName: "swaps",
                referencedColumnNames: ["id"],
                columnNames: ["swapId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "cryptoFiatSwap",
            new TableForeignKey({
                name: "FKCryptoFiatId",
                referencedTableName: "cryptocurrencies",
                referencedColumnNames: ["id"],
                columnNames: ["coinsId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "cryptoFiatSwap",
            new TableForeignKey({
                name: "FKFiatCryptoId",
                referencedTableName: "fiats",
                referencedColumnNames: ["id"],
                columnNames: ["coinsId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("cryptosSwap", "FKFiatCryptoId");
        await queryRunner.dropForeignKey("cryptosSwap", "FKCryptoFiatId");
        await queryRunner.dropForeignKey("cryptosSwap", "FKSwapCryptoFiatId");
        await await queryRunner.dropTable("cryptosSwap");
    }
}
