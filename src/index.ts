import fetch, { Response } from 'node-fetch';
import { All, AllOptions } from './interfaces/interface';
import { apis } from './types/types';

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
}

export default CovidStats;
