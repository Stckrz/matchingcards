import React, { useState } from 'react';
import style from './card.module.css';

interface PlayingCardProps {
	size: number,
	icon: React.ReactElement
}
export const PlayingCard: React.FC<PlayingCardProps> = ({ icon }) => {
	const [isFlipped, setIsFlipped] = useState(false)

	return (
		<>
			<div className={style.cardWrapper}>
				{!isFlipped
					? <div
						className={style.cardBack}
						onClick={() => { setIsFlipped(!isFlipped) }}>
					</div>
					: <div
						className={style.cardFront}
						onClick={() => { setIsFlipped(!isFlipped) }}>{icon}
					</div>
				}
			</div>
		</>
	)
}
