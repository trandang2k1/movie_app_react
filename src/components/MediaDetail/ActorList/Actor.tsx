import actorImage from '@/assets/images/actor.svg'

interface Props {
	id: number
	name: string
	profilePath: string
	character: string
}

function Actor({ id, name, profilePath, character }: Props) {
	return (
		<div
			className="rounded-t-lg border border-slate-200 break-words shadow-sm"
			key={id}
		>
			<img
				className="rounded-t-lg"
				src={profilePath ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}` : `${actorImage}`}
			/>
			<div className="p-2">
				<h2 className="font-bold">{name}</h2>
				<p>{character}</p>
				{/* <p>dấdawdasdawdas</p> */}
			</div>
		</div>
	)
}

export default Actor
