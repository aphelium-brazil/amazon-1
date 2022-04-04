import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class swapsBrokers1648286245655 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "swapsBrokers",
                columns: [
                    {
                        name: "swapId",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "brokerId",
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
            "swapsBrokers",
            new TableForeignKey({
                name: "FKSwapTwoId",
                referencedTableName: "swaps",
                referencedColumnNames: ["id"],
                columnNames: ["swapId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "swapsBrokers",
            new TableForeignKey({
                name: "FKBrokersId",
                referencedTableName: "brokers",
                referencedColumnNames: ["id"],
                columnNames: ["brokerId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("swapsBrokers", "FKBrokersId");
        await queryRunner.dropForeignKey("swapsBrokers", "FKSwapTwoId");
        await queryRunner.dropTable("swapsBrokers");
    }
}
