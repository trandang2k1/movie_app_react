export interface IAggregateCredits {
	cast: {
		adult: boolean
		gender: number
		id: number
		known_for_department: string
		name: string
		original_name: string
		popularity: number
		profile_path: string
		roles: {
			credit_id: number
			character: string
			episode_count: number
		}[]
		total_episode_count: number
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
		jobs: {
			credit_id: string
			job: string
			episode_count: number
		}[]
		department: string
		total_episode_count: number
	}[]
	id: number
}
