import { IPopular } from '@/models'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface MovieProps {
	movie: IPopular
}

function Movie({ movie }: MovieProps) {
	return (
		<div className="relative">
			<img
				src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
				alt=""
				className="aspect-video brightness-50"
			/>
			<div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
				<p className="mb-2 font-bold sm:text-[2vw]">{movie?.title}</p>
				<div>
					<p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
						PG13
					</p>
					<p className="text-[1.2vw]">{movie?.release_date}</p>
				</div>
				<div className="mt-4 hidden text-[1.2vw] sm:block">
					<p className="mb-2 font-bold">Overview</p>
					<p>{movie?.overview}</p>
				</div>
				<div className="mt-4">
					<button className="lg: mr-2 cursor-pointer rounded bg-white px-4 py-2 text-lg text-[10px] text-black">
						<FontAwesomeIcon icon={faPlay} />
						Trailer
					</button>
					<button className="lg: cursor-pointer rounded bg-slate-300/35 px-4 py-2 text-lg text-[10px]">
						View Detail
					</button>
				</div>
			</div>
		</div>
	)
}

export default Movie
