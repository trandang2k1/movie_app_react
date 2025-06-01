import { IMovie } from '@/models'
import { currentFormat } from '@/utils/currentFormat'

interface Props {
	movieInfo?: IMovie
}

function TVShowInformation({ movieInfo }: Props) {
	const uniqueCountries = movieInfo?.production_companies
		? [
				...new Set(
					movieInfo.production_companies.map(
						(item) => item.origin_country
					)
				),
			]
		: []

	return (
		<div className="text-[1.2vw]">
			<div className="mb-4">
				<h1 className="font-bold">Original Name</h1>
				<p>{movieInfo?.original_name}</p>
			</div>
			<div className="mb-4">
				<h1 className="font-bold">Original Country</h1>
				<div className="flex gap-1">
					{uniqueCountries.map((country, index) => (
						<img
							key={index}
							className="mt-1 w-[1.4vw]"
							src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
							alt={country} // Thêm thuộc tính alt để cải thiện khả năng tiếp cận
						/>
					))}
					{/* {movieInfo?.production_companies.map((item) => (
						<img
							key={item.id}
							className="mt-1 w-[1.4vw]"
							src={`https://flagcdn.com/48x36/${item.origin_country.toLowerCase()}.png`}
						/>
					))} */}
				</div>
			</div>
			<div className="mb-4">
				<h1 className="font-bold">Status</h1>
				<p>{movieInfo?.status}</p>
			</div>
			<div className="mb-4">
				<h1 className="font-bold">Network</h1>
				<div className='flex gap-3 flex-wrap'>
					{movieInfo?.networks.map((tvShow) => (
						<img
							className="mt-1 w-5 invert sm:w-10 md:w-15"
							key={tvShow.id}
							src={`http://media.themoviedb.org/t/p/h30${tvShow.logo_path}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default TVShowInformation
