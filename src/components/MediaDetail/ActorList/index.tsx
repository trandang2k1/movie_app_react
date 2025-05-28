import { IMovie, IRecommendations } from '@/models'
import Actor from './Actor'
import { useState } from 'react'
import { useFetch } from '@/hooks'
import { useParams } from 'react-router'
import RecommendationList from './RecommendationList'
import Loading from '@/components/Loading'
import Information from './Information'

interface Props {
	movieInfo?: IMovie
	type: string
}

function ActorList({ movieInfo, type }: Props) {
	const { id } = useParams()
	const { data: recommendations, isLoading } = useFetch<IRecommendations[]>(
		'get',
		`/${type}/${id}/recommendations`
	)
	const [show, setShow] = useState(false)

	const casts = (type: string) => {
		if (type === 'tv') {
			const moreShow = show
				? movieInfo?.aggregate_credits.cast
				: movieInfo?.aggregate_credits.cast.slice(0, 4)
			return moreShow?.map((item) => (
				<Actor
					key={item.id}
					id={item.id}
					name={item.name}
					profilePath={item.profile_path}
					character={item.roles.map(role => role.character).join(', ')}
					episode_count={item.roles[0].episode_count}
				/>
			))
		} else {
			const moreShow = show
				? movieInfo?.credits.cast
				: movieInfo?.credits.cast.slice(0, 4)
			return moreShow?.map((item) => (
				<Actor
					key={item.id}
					id={item.id}
					name={item.name}
					profilePath={item.profile_path}
					character={item.character}
				/>
			))
		}
	}

	return (
		<div className="bg-black text-[1.2vw] text-white">
			<div className="mx-auto flex max-w-screen-lg gap-6 px-6 py-8">
				<div className="flex-[2]">
					<h1 className="mb-8 text-2xl font-bold">Actor</h1>
					<div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
						{casts(type)}
					</div>
					<p
						className="my-4 inline-block cursor-pointer underline underline-offset-4 select-none"
						onClick={() => setShow(!show)}
					>
						{show ? 'Show Less' : 'Show More'}
					</p>
					<h1 className="py-8 text-2xl font-bold">More like this</h1>
					{!isLoading ? (
						<RecommendationList
							mediaList={recommendations || []}
							type={type}
						/>
					) : (
						<Loading />
					)}
				</div>
				<div className="flex-1">
					<h1 className="mb-8 text-2xl font-bold">Information</h1>
					<Information movieInfo={movieInfo} />
				</div>
			</div>
		</div>
	)
}

export default ActorList
