import fetch, { Response } from 'node-fetch';

import {
	All,
	AllOptions,
	Continents,
	ContinentsOptions
} from './interfaces';

import { apis } from './types';

const json = (res: Response) => res.json();

export class CovidStats {

	public baseURL: string;

	public constructor(api: apis = 'https://disease.sh') {

		this.baseURL = `${api}/v2`;
	}

	async all(options?: Partial<AllOptions>): Promise<All> {
		if (options) {
			return fetch(`${this.baseURL}/all?yesterday=${options.yesterday}&allowNull=${options.allowNull}`)
				.then(json);
		}
		return fetch(`${this.baseURL}/all`)
			.then(json);

	}

	async continents(options?: Partial<ContinentsOptions>): Promise<Continents> {

		if (options) {
			return fetch(`${this.baseURL}/continents?yesterday=${options.yesterday}&sort=${options.sort}&allowNull=${options.allowNull}`)
				.then(json);

		}
		return fetch(`${this.baseURL}/continents`)
			.then(json);

	}

}

export default CovidStats;
