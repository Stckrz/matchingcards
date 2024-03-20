import React, { useState } from 'react';

interface PlayingCardProps {
	size: number,
	icon: React.ReactElement
}
export const PlayingCard: React.FC<PlayingCardProps> = ({ size, icon }) => {
	const [isFlipped, setIsFlipped] = useState(false)

	return (
		<>
			<div className={`rounded w-4/6 h-5/6`}>
				{!isFlipped
					? <div
						className={`rounded h-full bg-black text-white`}
						onClick={() => { setIsFlipped(!isFlipped) }}>
					</div>
					: <div
						className={`rounded h-full bg-sky-950 text-white text-5xl flex items-center justify-center`}
						onClick={() => { setIsFlipped(!isFlipped) }}>{icon}
					</div>
				}
			</div>
		</>
	)
}
