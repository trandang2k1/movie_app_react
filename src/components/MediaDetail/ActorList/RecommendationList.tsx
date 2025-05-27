import MovieCard from '@/components/MediaList/MovieCard'
import { IRecommendations } from '@/models'
import { useState } from 'react'

interface Props {
	mediaList: IRecommendations[]
	type: string
}

function RecommendationList({ mediaList, type }: Props) {
	const [show, setShow] = useState(false)
	const someRecom = show ? mediaList : mediaList.slice(0, 8)

	return (
		<div>
			<div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
				{someRecom.map((item) => (
					<MovieCard
						key={item.id}
						id={item.id}
						posterPath={item.poster_path}
						voteAverage={item.vote_average}
						title={item.title || item.name}
						releaseDate={item.release_date || item.first_air_date}
						mediaType={item.media_type}
						type={type}
					/>
				))}
			</div>
            <p
				className="my-4 inline-block cursor-pointer underline underline-offset-4 select-none"
				onClick={() => setShow(!show)}
			>{!show ? "Show More" : "Show Less"}</p>
		</div>
	)
}

export default RecommendationList
