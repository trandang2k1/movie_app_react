import { ICredit, IRecommendations } from '@/models'
import Actor from './Actor'
import { useState } from 'react'
import { useFetch } from '@/hooks'
import { useParams } from 'react-router'
import RecommendationList from './RecommendationList'
import Loading from '@/components/Loading'

interface Props {
	mediaInfo?: ICredit
}

function ActorList({ mediaInfo }: Props) {
	const { id } = useParams()
	const [show, setShow] = useState(false)
	const moreShow = show ? mediaInfo?.cast : mediaInfo?.cast.slice(0, 4)
	const [recommendations, setRecommendations] = useState<IRecommendations[]>(
		[]
	)
	const [isLoading, setIsLoading] = useState(false)

	useFetch(
		'get',
		`https://api.themoviedb.org/3/movie/${id}/recommendations`,
		setRecommendations,
		setIsLoading,
		[id]
	)

	return (
		<div className="bg-black text-[1.2vw] text-white">
			<div className="mx-auto flex max-w-screen-lg gap-6 px-6 py-8">
				<div className="flex-[2]">
					<h1 className="mb-8 text-2xl font-bold">Actor</h1>
					<div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
						{moreShow?.map((actor) => (
							<Actor
								key={actor.cast_id}
								id={actor.id}
								name={actor.name}
								profilePath={actor.profile_path}
								character={actor.character}
							/>
						))}
					</div>
					<p
						className="my-4 inline-block cursor-pointer underline underline-offset-4 select-none"
						onClick={() => setShow(!show)}
					>
						{show ? 'Show Less' : 'Show More'}
					</p>
					<h1 className="py-8 text-2xl font-bold">More like this</h1>
					{!isLoading ? (
						<RecommendationList mediaList={recommendations} />
					) : (
						<Loading />
					)}
				</div>
				<div className="flex-1">
					<h1 className="mb-8 text-2xl font-bold">Information</h1>
				</div>
			</div>
		</div>
	)
}

export default ActorList
