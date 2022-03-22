import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class brokers1647972371954 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "brokers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "slug",
                        type: "varchar",
                    },
                    {
                        name: "logo",
                        type: "varchar",
                    },
                    {
                        name: "dateLaunched",
                        type: "timestamp",
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
        await queryRunner.dropTable("brokers");
    }
}
