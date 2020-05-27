import { yesterday, sort } from '../types';

export interface All {
	updated: number;
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
	tests: number;
	testsPerOneMillion: number;
	population: number;
	activePerOneMillion: number;
	recoveredPerOneMillion: number;
	criticalPerOneMillion: number;
	affectedCountries: number;
}

export interface AllOptions {
	yesterday: yesterday;
	allowNull: boolean;
}

export interface Continents {
	continent: string;
	updated: number;
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	active: number;
	critical: number;
}

export interface ContinentsOptions extends AllOptions {
	sort: sort;
}

