import { IMediaList } from "@/models"
import CircularProgressBar from "../CircularProgressBar"

interface Props {
	all: IMediaList[]
}

function MovieCard({ all }: Props) {
	return all.map((item) => {
		return (
			<div key={item.id} className="rounded-lg border border-slate-800">
				<img
					className="rounded-lg"
					src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
					alt=""
				/>
				<div className="relative -top-[1.5vw] px-4 py-2">
					<CircularProgressBar
						percent={Math.round(item.vote_average * 10)}
					/>
					<p className="mt-2 font-bold">{item.title || item.name}</p>
					<p className="text-slate-300">
						{item.release_date || item.first_air_date}
					</p>
				</div>
			</div>
		)
	})
	// <div className="border border-slate-800 rounded-lg">
	// 	<img
	// 		className="rounded-lg"
	// 		src="https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg"
	// 		alt=""
	// 	/>
	// 	<div className="px-4 py-2 relative -top-[1.5vw]">
	// 		<CircularProgressBar />
	// 		<p className="font-bold mt-2">A Minecraft Movie</p>
	//         <p className="text-slate-300">2025-03-31</p>
	// 	</div>
	// </div>
}

export default MovieCard
