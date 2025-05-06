interface Props {
	percent: number
	size?: number
	strokeWidth?: number
}

function CircularProgressBar({ percent, size = 3, strokeWidth = 0.25 }: Props) {
	const radius = size / 2 - strokeWidth
	const circumference = 2 * Math.PI * radius

	return (
		<div>
			<svg width={`${size}vw`} height={`${size}vw`}>
				<circle
					r={`${radius}vw`}
					cx={`${size / 2}vw`}
					cy={`${size / 2}vw`}
					stroke="white"
					strokeWidth={`${strokeWidth}vw`}
				/>
				<circle
					r={`${radius}vw`}
					cx={`${size / 2}vw`}
					cy={`${size / 2}vw`}
					stroke={percent > 80 ? 'green' : 'yellow'}
					strokeWidth={`${strokeWidth}vw`}
					fill="none"
					strokeDasharray={`${circumference}vw`}
					strokeDashoffset={`${circumference - (percent / 100) * circumference}vw`}
					transform="rotate(-90)"
					style={{ transformOrigin: 'center' }}
					strokeLinecap="round"
				/>
				<text
					x={`${size / 2}vw`}
					y={`${size / 2}vw`}
					fill="white"
					fontSize={`${radius}vw`}
					alignmentBaseline="middle"
					textAnchor="middle"
				>
					{percent}
				</text>
			</svg>
		</div>
	)
}

export default CircularProgressBar
