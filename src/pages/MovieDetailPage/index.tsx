import CircularProgressBar from '@/components/CircularProgressBar'
import { useFetch } from '@/hooks'
import { IMovie } from '@/models'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useParams } from 'react-router'

function MovieDetailPage() {
	const { id } = useParams()
	const [movieInfo, setMovieInfo] = useState<IMovie>()

	useFetch('get', `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits&language=en-US`, setMovieInfo, [id])

	// useEffect(() => {
	// 	const getMovieId = async () => {
	// 		const res = await axios.get(
	// 			`https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits&language=en-US`,
	// 			{
	// 				headers: {
	// 					accept: 'application/json',
	// 					Authorization:
	// 						'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGVmNWYxMTU4YjkzOTNmYjM2YjkyNGUyZTJjZjEwMiIsIm5iZiI6MTc0NDk2NTA0Mi42NjgsInN1YiI6IjY4MDIwZGIyMmU4OTU4ZjBmOTk5NzFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FQsRao0pm9YKNjGNPPYGz89Xx6Ouc8ny1AEYTGD56Kk',
	// 				},
	// 			}
	// 		)
	// 		setMovieInfo(res.data)
	// 	}
	// 	getMovieId()
	// }, [id])

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

	const selectCrews = (value: string) => {
		const select = crews
			.filter((crew) => crew.job === value)
			.map((crew) => crew.name)
		if (select.length >= 2) {
			return select.join(', ')
		} else {
			return select
		}
	}

	return (
		<div className="relative overflow-hidden text-white">
			<img
				className="absolute inset-0 brightness-[.2]"
				src={`https://image.tmdb.org/t/p/original${movieInfo?.backdrop_path}`}
				alt=""
			/>
			<div className="relative mx-auto flex max-w-screen-lg gap-6 px-6 py-8 lg:gap-8">
				<div className="flex-1">
					<img
						src={`https://image.tmdb.org/t/p/original${movieInfo?.poster_path}`}
						alt=""
					/>
				</div>
				<div className="flex-[2] text-[1.2vw]">
					<p className="mb-2 text-[2vw] font-bold">
						{movieInfo?.title}
					</p>
					<div className="flex items-center gap-4">
						<span className="border border-gray-400 p-1 text-gray-400">
							{certification}
						</span>
						<p>{movieInfo?.release_date}</p>
						<p>
							{(movieInfo?.genres || [])
								.map((genre) => genre.name)
								.join(', ')}
						</p>
					</div>
					<div className="mt-4 flex items-center gap-4">
						<div className="flex items-center gap-2">
							<CircularProgressBar
								percent={Math.round(
									(movieInfo?.vote_average || 0) * 10
								)}
								size={3.5}
								strokeWidth={0.3}
							/>
							Rating
						</div>
						<button>
							<FontAwesomeIcon icon={faPlay} className="mr-1" />
							Trailer
						</button>
					</div>
					<div>
						<p className="mb-2 text-[1.3vw] font-bold">Overview</p>
						<p>{movieInfo?.overview}</p>
					</div>
					<div className="mt-4 grid grid-cols-2 gap-2">
						<div>
							<p className="font-bold">Director</p>
							<p>{selectCrews('Director')}</p>
						</div>
						<div>
							<p>Writer</p>
							<p>{selectCrews('Writer')}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieDetailPage
