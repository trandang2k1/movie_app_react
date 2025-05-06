export interface IMovie {
	adult: boolean
	backdrop_path: string
	belongs_to_collection: string
	budget: number
	credits: {
		cast: {
			adult: boolean
			gender: number
			id: number
			known_for_department: string
			name: string
			original_name: string
			popularity: number
			profile_path: string
			cast_id: number
			character: string
			credit_id: number
			order: number
		}[]
		crew: {
			adult: boolean
			gender: number
			id: number
			known_for_department: string
			name: string
			original_name: string
			popularity: number
			profile_path: string
			credit_id: string
			department: string
			job: string
		}[]
	}
	genres: {
		id: number
		name: string
	}[]
	homepage: string
	id: number
	imdb_id: string
	original_language: string
	original_title: string
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
	revenue: number
	runtime: number
	spoken_languages: {
		english_name: string
		iso_639_1: string
		name: string
	}[]
	status: string
	tagline: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}
