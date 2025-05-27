import CircularProgressBar from '../CircularProgressBar'
import { useNavigate } from 'react-router'
import { PATH_MOVIE, PATH_TV_SHOW } from '@/contant'

interface Props {
	id: number
	posterPath: string
	voteAverage: number
	title: string
	releaseDate: string
	mediaType: string
	type?: string
}

function MovieCard({
	id,
	posterPath,
	voteAverage,
	title,
	releaseDate,
	mediaType,
	type,
}: Props) {
	const navigate = useNavigate()

	const mediaPath = (value: string, type?: string) => {
		if (value === 'tv' || type === 'tv') {
			return PATH_TV_SHOW.replace(':id', `${id}`)
		} else {
			return PATH_MOVIE.replace(':id', `${id}`)
		}
	}

	return (
		<div
			key={id}
			onClick={() => navigate(mediaPath(mediaType, type))}
			className="cursor-pointer rounded-lg border border-slate-800"
		>
			<div className='relative flex justify-end'>
				{
					(mediaType === 'tv' || type === 'tv') && (
						<p className='absolute border rounded m-1'>TV Show</p>
					)
				}
				<img
					className="rounded-lg"
					src={`https://image.tmdb.org/t/p/original${posterPath}`}
					alt=""
				/>
			</div>
			<div className="relative -top-[1.5vw] px-4 py-2">
				<CircularProgressBar percent={Math.round(voteAverage * 10)} />
				<p className="mt-2 font-bold">{title}</p>
				<p className="text-slate-300">{releaseDate}</p>
			</div>
		</div>
	)
}

export default MovieCard
