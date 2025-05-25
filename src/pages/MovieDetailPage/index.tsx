import { ActorList, Banner } from '@/components/MediaDetail'
import { useFetch } from '@/hooks'
import { IMovie } from '@/models'
import { useParams } from 'react-router'

function MovieDetailPage() {
	const { id } = useParams()

	const { data: movieInfo, isLoading } = useFetch<IMovie>(
		'get',
		`/movie/${id}?append_to_response=release_dates,credits&language=en-US`
	)

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

	return (
		<div>
			<Banner mediaInfo={movieInfo} isLoading={isLoading} />
			<ActorList mediaInfo={movieInfo?.credits} movieInfo={movieInfo} />
		</div>
	)
}

export default MovieDetailPage
