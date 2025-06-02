import { ActorList, Banner } from '@/components/MediaDetail'
import { useFetch } from '@/hooks'
import { IMovie } from '@/models'
import { useParams } from 'react-router'

function MovieDetailPage() {
	const { id } = useParams()

	const { data: movieInfo, isLoading } = useFetch<IMovie>(
		'get',
		`/movie/${id}?append_to_response=release_dates,credits,videos&language=en-US`
	)

	const certification = (
		(movieInfo?.release_dates.results || []).find(
			(result) => result.iso_3166_1 === 'US'
		)?.release_dates || []
	).find((releaseDate) => releaseDate.certification)?.certification

	const crews = (movieInfo?.credits.crew || [])
		.filter((crew) =>
			['Director', 'Screenplay', 'Writer'].includes(crew.job)
		)
		.map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }))

	return (
		<div>
			<Banner
				backdropPath={movieInfo?.backdrop_path || ''}
				posterPath={movieInfo?.poster_path || ''}
				title={movieInfo?.title || ''}
				certification={certification || ''}
				releaseDate={movieInfo?.release_date || ''}
				genres={movieInfo?.genres || []}
				voteAverage={movieInfo?.vote_average || 0}
				overview={movieInfo?.overview || ''}
				crews={crews}
				isLoading={isLoading}
				trailerVideoKey={(movieInfo?.videos.results || []).find(video => video.type === "Trailer")?.key || ''}
			/>
			<ActorList movieInfo={movieInfo} type='movie'/>
		</div>
	)
}

export default MovieDetailPage
