import { useEffect, useState } from 'react'
import Movie from './Movie'
import PaginateIndicator from './PaginateIndicator'
import axios from 'axios'
import { IPopular } from '@/models'

function FeatureMovies() {
	const [movies, setMovies] = useState<IPopular[]>([])
	const [activeMovieId, setActiveMovieId] = useState(0)

	useEffect(() => {
		const getMovies = async () => {
			const res = await axios.get(
				'https://api.themoviedb.org/3/movie/popular',
				{
					headers: {
						Accept: 'application/json',
						Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGVmNWYxMTU4YjkzOTNmYjM2YjkyNGUyZTJjZjEwMiIsIm5iZiI6MTc0NDk2NTA0Mi42NjgsInN1YiI6IjY4MDIwZGIyMmU4OTU4ZjBmOTk5NzFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FQsRao0pm9YKNjGNPPYGz89Xx6Ouc8ny1AEYTGD56Kk`,
					},
				}
			)
			const someMovies = res.data.results.slice(0, 4)
			setMovies(someMovies)
			setActiveMovieId(someMovies[0].id)
		}
		getMovies()
	}, [])

	return (
		<div className="bg-black mt-14 lg:mt-20">
			<div className="relative mx-auto max-w-screen-lg overflow-x-hidden text-white">
				<div
					className="flex transition-transform duration-700 ease-in-out"
					style={{
						transform: `translateX(-${movies.findIndex((movie) => movie.id === activeMovieId) * 100}%)`,
					}}
				>
					{movies.map((movie) => (
						<div key={movie.id} className="w-full shrink-0">
							<Movie movie={movie} />
						</div>
					))}
				</div>
				<PaginateIndicator
					movies={movies}
					activeMovieId={activeMovieId}
					setActiveMovieId={setActiveMovieId}
				/>
			</div>
		</div>
	)
}

export default FeatureMovies
