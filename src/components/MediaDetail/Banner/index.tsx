import CircularProgressBar from '@/components/CircularProgressBar'
import Loading from '@/components/Loading'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
	backdropPath: string
	posterPath: string
	title: string
	certification: string
	releaseDate: string
	genres: {
		id: number
		name: string
	}[]
	voteAverage: number
	overview: string
	crews: {
		id: number
		job: string
		name: string
	}[]
	isLoading: boolean
}

function Banner({
	backdropPath,
	posterPath,
	title,
	certification,
	releaseDate,
	genres,
	voteAverage,
	overview,
	crews,
	isLoading,
}: Props) {
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
		<div>
			{!isLoading ? (
				<div className="relative overflow-hidden text-white shadow-md shadow-slate-400">
					<img
						className="absolute inset-0 brightness-[.2]"
						src={`https://image.tmdb.org/t/p/original${backdropPath}`}
						alt=""
					/>
					<div className="relative mx-auto flex max-w-screen-lg gap-6 px-6 py-8 lg:gap-8">
						<div className="flex-1">
							<img
								src={`https://image.tmdb.org/t/p/original${posterPath}`}
								alt=""
							/>
						</div>
						<div className="flex-[2] text-[1.2vw]">
							<p className="mb-2 text-[2vw] font-bold">{title}</p>
							<div className="flex items-center gap-4">
								<span className="border border-gray-400 p-1 text-gray-400">
									{certification}
								</span>
								<p>{releaseDate}</p>
								<p>
									{(genres || [])
										.map((genre) => genre.name)
										.join(', ')}
								</p>
							</div>
							<div className="mt-4 flex items-center gap-4">
								<div className="flex items-center gap-2">
									<CircularProgressBar
										percent={Math.round(voteAverage * 10)}
										size={3.5}
										strokeWidth={0.3}
									/>
									Rating
								</div>
								<button>
									<FontAwesomeIcon
										icon={faPlay}
										className="mr-1"
									/>
									Trailer
								</button>
							</div>
							<div>
								<p className="mb-2 text-[1.3vw] font-bold">
									Overview
								</p>
								<p>{overview}</p>
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
			) : (
				<Loading />
			)}
		</div>
	)
}

export default Banner
