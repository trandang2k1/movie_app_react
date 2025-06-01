import { IAggregateCredits } from './IAggregateCredits'
import { ICredit } from './ICredit'

export interface IMovie {
	adult: boolean
	backdrop_path: string
	belongs_to_collection: string
	budget: number
	credits: ICredit
	aggregate_credits: IAggregateCredits
	genres: {
		id: number
		name: string
	}[]
	homepage: string
	id: number
	imdb_id: string
	original_language: string
	original_title: string
	original_name: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: {
		id: number
		logo_path: string
		name: string
		origin_country: string
	}[]
	production_contries: {
		iso_3166_1: string
		name: string
	}[]
	release_date: string
	first_air_date: string
	release_dates: {
		results: {
			iso_3166_1: string
			release_dates: {
				certification: string
				iso_639_1: string
				note: string
				release_date: string
				type: number
			}[]
		}[]
	}
	content_ratings: {
		results: {
			description: []
			iso_3166_1: string
			rating: string
		}[]
	}
	revenue: number
	runtime: number
	spoken_languages: {
		english_name: string
		iso_639_1: string
		name: string
	}[]
	networks: {
		id: number,
		name: string
		logo_path: string
		origin_country: string
	}[]
	seasons: {
		air_date: string
		episode_count: number
		id: number
		name: string
		overview: string
		poster_path: string
		season_number: number
		vote_average: number
	}[]
	status: string
	tagline: string
	title: string
	name: string
	video: boolean
	vote_average: number
	vote_count: number
}
