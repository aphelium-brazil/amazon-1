export interface IImportCoinDTO {
	name: string;

	isFiat: boolean;

	country?: string;

	description: string;

	logo: string;

	symbol: string;

	isActive: boolean;

	firstHistoricalData?: string;

	lastHistoricalData?: string;
}
