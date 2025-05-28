import { IMediaList } from '@/models'
import { useState } from 'react'
import MovieCard from './MovieCard'
import { useFetch } from '@/hooks'
import Loading from '../Loading'

interface Props {
	title: string
	tabs: {
		id: number
		name: string
		url: string
		type: string
	}[]
}

function MediaList({ title, tabs }: Props) {
	const [trendingPart, setTrendingPart] = useState(tabs[0].type)

	const { data: mediaList, isLoading } = useFetch<IMediaList[]>(
		'get',
		tabs.find((tab) => tab.type === trendingPart)?.url || tabs[0].url
	)

	const [show, setShow] = useState(false)
	const moreShow = show ? mediaList : mediaList?.slice(0, 12)

	return (
		<>
			{!isLoading ? (
				<div className="bg-black px-8 py-10 text-[1.2vw] text-white">
					<div className="pb-10">
						<div className="mb-10 flex items-center gap-4">
							<p className="text-[2vw] font-bold">{title}</p>
							<ul className="flex gap-2 rounded border border-white">
								{tabs.map((tab) => {
									return (
										<li
											key={tab.id}
											className={`cursor-pointer rounded px-2 py-1 text-center md:w-[100px] ${trendingPart === tab.type ? 'bg-white text-black' : 'text-white'}`}
											onClick={() =>
												setTrendingPart(tab.type)
											}
										>
											{tab.name}
										</li>
									)
								})}
							</ul>
						</div>
						<div className="grid grid-cols-6 gap-4 lg:gap-6">
							{(moreShow || []).map((item) => (
								<MovieCard
									key={item.id}
									id={item.id}
									posterPath={item.poster_path}
									voteAverage={item.vote_average}
									title={item.title || item.name}
									releaseDate={
										item.release_date || item.first_air_date
									}
									mediaType={item.media_type}
									type={trendingPart}
								/>
							))}
						</div>
						<p
							className="my-4 inline-block cursor-pointer underline underline-offset-4 select-none"
							onClick={() => setShow(!show)}
						>
							{!show ? 'Show More' : 'Show Less'}
						</p>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</>
	)
}

export default MediaList
