import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class swapCoins1648148185134 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "swapCoins",
                columns: [
                    {
                        name: "swapId",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "coinId",
                        type: "uuid",
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

        await queryRunner.createForeignKey(
            "swapCoins",
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
            "swapCoins",
            new TableForeignKey({
                name: "FKCoinsId",
                referencedTableName: "coins",
                referencedColumnNames: ["id"],
                columnNames: ["coinId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("swapCoins", "FKCoinsId");
        await queryRunner.dropForeignKey("swapCoins", "FKSwapId");
        await queryRunner.dropTable("swaps");
    }
}
