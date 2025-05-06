import { IMediaLists } from '@/models'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

interface Props {
	title: string,
	tabs: {
		id: number
		name: string
		url: string
	}[]
}

function MediaList({ title, tabs }: Props) {
	const [trendingPart, setTrendingPart] = useState(tabs[0].id)
	const [mediaList, setMediaList] = useState<IMediaLists[]>([])

	useEffect(() => {
		const getAllTrending = async () => {
			const res = await axios.get(
				tabs.find((tab) => tab.id === trendingPart)?.url || tabs[0].url,
				{
					headers: {
						Accept: 'application/json',
						Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGVmNWYxMTU4YjkzOTNmYjM2YjkyNGUyZTJjZjEwMiIsIm5iZiI6MTc0NDk2NTA0Mi42NjgsInN1YiI6IjY4MDIwZGIyMmU4OTU4ZjBmOTk5NzFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FQsRao0pm9YKNjGNPPYGz89Xx6Ouc8ny1AEYTGD56Kk`,
					},
				}
			)
			setMediaList(res.data.results)
		}
		getAllTrending()
	}, [trendingPart, tabs])

	console.log(mediaList)

	return (
		<div className="bg-black px-8 py-10 text-[1.2vw] text-white">
			<div className="pb-10">
				<div className="mb-10 flex items-center gap-4">
					<p className="text-[2vw] font-bold">{title}</p>
					<ul className="flex gap-2 rounded border border-white">
						{tabs.map((tab) => {
							return (
								<li
									key={tab.id}
									className={`cursor-pointer rounded px-2 py-1 text-center md:w-[100px] ${trendingPart === tab.id ? 'bg-white text-black' : 'text-white'}`}
									onClick={() => setTrendingPart(tab.id)}
								>
									{tab.name}
								</li>
							)
						})}
					</ul>
				</div>
				<div className="grid grid-cols-4 gap-4 lg:gap-6">
					<MovieCard all={mediaList} />
				</div>
			</div>
		</div>
	)
}

export default MediaList
