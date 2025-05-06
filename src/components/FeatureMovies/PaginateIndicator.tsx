import { IPopular } from '@/models'
import { useEffect } from 'react'

interface PaginateIndicatorProps {
	movies: IPopular[]
	activeMovieId: number
	setActiveMovieId: (id: number) => void
}

function PaginateIndicator({
	movies,
	activeMovieId,
	setActiveMovieId,
}: PaginateIndicatorProps) {
	useEffect(() => {
		const timer = setTimeout(() => {
			const currentIndex = movies.findIndex(
				(movie) => movie.id === activeMovieId
			)
			const nextIndex = (currentIndex + 1) % movies.length // quay vòng
			setActiveMovieId(movies[nextIndex].id)
		}, 5000)

		return () => clearTimeout(timer) // cleanup nếu re-render
	}, [activeMovieId, movies, setActiveMovieId])

	return (
		<div className="absolute right-8 bottom-[10%]">
			<ul className="flex gap-1">
				{movies.map((item) => (
					<li
						key={item.id}
						onClick={() => setActiveMovieId(item.id)}
						className={`h-1 w-6 transform cursor-pointer transition-all duration-700 ease-in-out ${
							item.id === activeMovieId
								? 'bg-slate-100'
								: 'bg-slate-600'
						}`}
					></li>
				))}
			</ul>
		</div>
	)
}

export default PaginateIndicator
