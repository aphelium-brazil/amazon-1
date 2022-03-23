import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class symbols1648042286049 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "symbols",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "currencyFromId",
                        type: "uuid",
                    },
                    {
                        name: "currencyToId",
                        type: "uuid",
                    },
                    {
                        name: "brokeId",
                        type: "uuid",
                    },
                    {
                        name: "url",
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
            "symbols",
            new TableForeignKey({
                name: "FKSymbolCurrencyFromCryptoId",
                referencedTableName: "cryptocurrencies",
                referencedColumnNames: ["id"],
                columnNames: ["currencyFromId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "symbols",
            new TableForeignKey({
                name: "FKSymbolCurrencyFromFiatId",
                referencedTableName: "fiats",
                referencedColumnNames: ["id"],
                columnNames: ["currencyFromId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "symbols",
            new TableForeignKey({
                name: "FKSymbolCurrencyToCryptoId",
                referencedTableName: "cryptocurrencies",
                referencedColumnNames: ["id"],
                columnNames: ["currencyToId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "symbols",
            new TableForeignKey({
                name: "FKSymbolCurrencyToFiatId",
                referencedTableName: "fiats",
                referencedColumnNames: ["id"],
                columnNames: ["currencyToId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "symbols",
            new TableForeignKey({
                name: "FKSymbolBrokerId",
                referencedTableName: "brokers",
                referencedColumnNames: ["id"],
                columnNames: ["brokeId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("symbols", "FKSymbolBrokerId");

        await queryRunner.dropForeignKey("symbols", "FKSymbolCurrencyToFiatId");

        await queryRunner.dropForeignKey(
            "symbols",
            "FKSymbolCurrencyToCryptoId"
        );

        await queryRunner.dropForeignKey(
            "symbols",
            "FKSymbolCurrencyFromFiatId"
        );

        await queryRunner.dropForeignKey(
            "symbols",
            "FKSymbolCurrencyFromCryptoId"
        );

        await queryRunner.dropTable("symbols");
    }
}
