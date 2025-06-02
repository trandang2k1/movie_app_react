import { ActorList, Banner } from '@/components/MediaDetail'
import { useFetch } from '@/hooks'
import { IMovie } from '@/models'
import { useParams } from 'react-router'

function TVShowDetailPage() {
	const { id } = useParams()

	const { data: tvInfo, isLoading } = useFetch<IMovie>(
		'get',
		`/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos&language=en-US`
	)

	const certification = (tvInfo?.content_ratings.results || []).find(result => result.iso_3166_1 === 'US')?.rating

	const crews = (tvInfo?.aggregate_credits.crew || []).filter(crew => {
		const jobs = (crew.jobs || []).map(j => j.job)
		return ['Director', 'Writer'].some(job => jobs.find(j => j === job))
	}).map(crew => ({id: crew.id, job: crew.jobs[0].job, name: crew.name}))


	return (
		<div>
			<Banner
				backdropPath={tvInfo?.backdrop_path || ''}
				posterPath={tvInfo?.poster_path || ''}
				title={tvInfo?.name || ''}
				releaseDate={tvInfo?.first_air_date || ''}
				genres={tvInfo?.genres || []}
				voteAverage={tvInfo?.vote_average || 0}
				overview={tvInfo?.overview || ''}
				certification={certification || ''}
				crews={crews}
				isLoading={isLoading}
				trailerVideoKey={(tvInfo?.videos.results || []).find(video => video.type === "Trailer")?.key || ''}
			/>
			<ActorList movieInfo={tvInfo} type='tv'/>
		</div>
	)
}

export default TVShowDetailPage
