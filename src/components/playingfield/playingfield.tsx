import { useState, useEffect } from 'react';
import { PlayingCard } from 'components/card/card';
import { DifficultyPicker } from 'components/difficulty/difficulty';
import { iconArray, arrayShuffle } from 'library/cardDetailFunctions';
import style from './playingfield.module.css';



export const PlayingField: React.FC = () => {
	const [cardArray, setCardArray] = useState<any[]>([])
	const [size, setSize] = useState(2);
	const cardHeight = `${(100/size)}%`;
	const cardWidth = `${(90/size)}%`;

	const cardArrayCreator = (number: number) => {
		setCardArray([])
		const assshitholefuck = ((number ** 2) / 2)
		const cardArray: React.ReactElement[] = []
		for (let i = 0; i < assshitholefuck; i++) {
			cardArray.push(<PlayingCard size={size} icon={iconArray[i]} />)
			cardArray.push(<PlayingCard size={size} icon={iconArray[i]} />)
		}
		setCardArray(arrayShuffle(cardArray))
	}

	useEffect(() => {
		cardArrayCreator(size)
	}, [size])


	return (
		<>
			<div className={style.gameWrapper}>
				<div className={style.playingField}>
					{
						cardArray.map((card) => {
							return (
								<div className={style.cardContainer} style={{height: cardHeight, width: cardWidth}}>
									{card}
								</div>
							)
						})
					}
				</div>
				<DifficultyPicker setSize={setSize} />
			</div>
		</>
	)
}
