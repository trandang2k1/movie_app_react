import { IMediaList } from '@/models'
import CircularProgressBar from '../CircularProgressBar'
import { useNavigate } from 'react-router'
import { PATH_MOVIE } from '@/contant'

interface Props {
	id: number
	posterPath: string
	voteAverage: number
	title: string
	releaseDate: string
}

function MovieCard({ id, posterPath, voteAverage, title, releaseDate }: Props) {
	const navigate = useNavigate()
	return (
		<div
			key={id}
			onClick={() => navigate(PATH_MOVIE.replace(':id', `${id}`))}
			className="cursor-pointer rounded-lg border border-slate-800"
		>
			<img
				className="rounded-lg"
				src={`https://image.tmdb.org/t/p/original${posterPath}`}
				alt=""
			/>
			<div className="relative -top-[1.5vw] px-4 py-2">
				<CircularProgressBar percent={Math.round(voteAverage * 10)} />
				<p className="mt-2 font-bold">{title}</p>
				<p className="text-slate-300">{releaseDate}</p>
			</div>
		</div>
	)
	// <div className="border border-slate-800 rounded-lg">
	// 	<img
	// 		className="rounded-lg"
	// 		src="https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg"
	// 		alt=""
	// 	/>
	// 	<div className="px-4 py-2 relative -top-[1.5vw]">
	// 		<CircularProgressBar />
	// 		<p className="font-bold mt-2">A Minecraft Movie</p>
	//         <p className="text-slate-300">2025-03-31</p>
	// 	</div>
	// </div>
}

export default MovieCard
