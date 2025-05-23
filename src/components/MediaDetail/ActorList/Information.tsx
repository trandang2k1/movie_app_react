import { IMovie } from '@/models'
import { currentFormat } from '@/utils/currentFormat'

interface Props {
	movieInfo?: IMovie
}

function Information({ movieInfo }: Props) {
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
				<h1 className="font-bold">Original Title</h1>
				<p>{movieInfo?.original_title}</p>
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
				<h1 className="font-bold">Budget</h1>
				<p>{currentFormat(movieInfo?.budget || 0, 'USD')}</p>
			</div>
			<div className="mb-4">
				<h1 className="font-bold">Revenue</h1>
				<p>{currentFormat(movieInfo?.revenue || 0, 'USD')}</p>
			</div>
		</div>
	)
}

export default Information
