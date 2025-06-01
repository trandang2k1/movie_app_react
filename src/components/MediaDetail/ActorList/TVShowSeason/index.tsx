import CircularProgressBar from '@/components/CircularProgressBar'
import { useState } from 'react'

interface Props {
	tvSeason: {
		air_date: string
		episode_count: number
		id: number
		name: string
		overview: string
		poster_path: string
		season_number: number
		vote_average: number
	}[]
}

function TVShowSeason({ tvSeason }: Props) {
	const [show, setShow] = useState(false)
	const moreShow = show ? tvSeason : tvSeason.slice(0, 3)

	return (
		<div className="text-[1.3vw]">
			<h1 className="mb-8 text-[1.4vw] font-bold">Seasons</h1>
			<div className="flex flex-col gap-4">
				{moreShow.map((season) => (
					<div
						key={season.id}
						className="flex flex-col gap-4 rounded-lg border md:flex-row"
					>
						<img
							src={`http://media.themoviedb.org/t/p/w300${season.poster_path}`}
							className="rounded-lg md:max-w-[130px] "
						/>
						<div className="space-y-1">
							<p className="text-[1.4vw] font-bold">
								{season.name}
							</p>
							<div className="flex items-center gap-2">
								<p className="font-bold">Rating: </p>
								<CircularProgressBar
									percent={Math.round(
										season.vote_average * 10
									)}
									size={2.5}
									strokeWidth={0.2}
								/>
							</div>
							<p className="flex gap-2">
								<span className="font-bold">Release Date:</span>
								{season.air_date}
							</p>
							<p>
								{season.episode_count}{' '}
								{season.episode_count > 1
									? 'Episodes'
									: 'Episode'}
							</p>
							<p className="line-clamp-2 overflow-hidden text-ellipsis">
								{season.overview}
							</p>
						</div>
					</div>
				))}
			</div>
			<p
				className="my-4 inline-block cursor-pointer underline underline-offset-4 select-none"
				onClick={() => setShow(!show)}
			>
				{
					!show ? "Show More" : "Show Less"
				}
			</p>
		</div>
	)
}

export default TVShowSeason
