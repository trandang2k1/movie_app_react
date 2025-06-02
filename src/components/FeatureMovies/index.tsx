import { useState } from 'react'
import Movie from './Movie'
import PaginateIndicator from './PaginateIndicator'
import { IPopular } from '@/models'
import { useFetch } from '@/hooks'
import Loading from '../Loading'

function FeatureMovies() {
	const [activeMovieId, setActiveMovieId] = useState(0)
	const { data: movies, isLoading } = useFetch<IPopular[]>(
		'get',
		'/movie/popular'
	)
	const someMovies = (movies ?? []).slice(0, 4)

	return (
		<div className='bg-slate-950'>
			<div className="relative mx-auto max-w-screen-lg overflow-x-hidden text-white">
				<div
					className="flex transition-transform duration-700 ease-in-out"
					style={{
						transform: `translateX(-${someMovies.findIndex((movie) => movie.id === activeMovieId) * 100}%)`,
					}}
				>
					{!isLoading ? (
						someMovies.map((movie) => (
							<div key={movie.id} className="w-full shrink-0">
								<Movie movie={movie} />
							</div>
						))
					) : (
						<Loading />
					)}
				</div>
				<PaginateIndicator
					movies={someMovies}
					activeMovieId={activeMovieId}
					setActiveMovieId={setActiveMovieId}
				/>
			</div>
		</div>
	)
}

export default FeatureMovies
