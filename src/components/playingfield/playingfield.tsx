import { useState, useEffect } from 'react';
import { PlayingCard } from 'components/card/card';
import { DifficultyPicker } from 'components/difficulty/difficulty';
import { iconArray, arrayShuffle } from 'library/cardDetailFunctions';


export const PlayingField: React.FC = () => {
	const [cardArray, setCardArray] = useState<React.ReactElement[]>([])
	const [size, setSize] = useState(6);

	const cardArrayCreator = (number: number) => {
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
		console.log("re-render")
	}, [size])


	return (
		<>
			<div className={`bg-blue-500 flex flex-wrap w-1/3 h-3/4 p-2 rounded`}>
				<div className={`bg-blue-200 flex flex-wrap  w-full h-5/6 p-2 rounded`}>
				{
					cardArray.map((card) => {
						return (
							<div className={`h-1/${size} w-1/${size} flex items-center justify-center`}>
								{card}
							</div>
						)
					})
				}
				</div>
				<DifficultyPicker setSize={ setSize } />
			</div>
		</>
	)
}
