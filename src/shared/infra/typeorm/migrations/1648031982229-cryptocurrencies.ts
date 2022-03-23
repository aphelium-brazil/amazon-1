import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class cryptocurrencies1648031982229 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cryptocurrencies",
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
                        name: "logo",
                        type: "varchar",
                    },
                    {
                        name: "symbol",
                        type: "varchar",
                    },
                    {
                        name: "slug",
                        type: "varchar",
                    },
                    {
                        name: "sign",
                        type: "varchar",
                    },
                    {
                        name: "isActive",
                        type: "boolean",
                    },
                    {
                        name: "firstHistoricalData",
                        type: "timestamp",
                    },
                    {
                        name: "lastHistoricalData",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "platformName",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "platformDescription",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "platformSymbol",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "platformSlug",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "platformTokenAddress",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "websiteName",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "websiteDescription",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "websiteUrl",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "sourceCodeName",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "sourceCodeUrl",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "techDocName",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "techDocDescription",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "techDocFile",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "techDocUrl",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "techDocCreatedAt",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "techDocUpdatedAt",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "categoryName",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "categoryDescription",
                        type: "varchar",
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
        await queryRunner.dropTable("cryptocurrencies");
    }
}
