import { useState, useEffect } from 'react';

//context
import { CardInterface } from 'context/cardcontext';

//card icon imports
import { iconArray, arrayShuffle } from 'library/cardDetailFunctions';

//components
import { DifficultyPicker } from 'components/difficulty/difficulty';
import { Card } from 'components/card/card';

export const PlayingField: React.FC = () => {
	const [flippedCards, setFlippedCards] = useState<string[]>([])

	const [cardArray, setCardArray] = useState<CardInterface[]>([])
	let cardIndex = 0;

	const [boardIsShown, setBoardIsShown] = useState(true)
	const [size, setSize] = useState(4);

	const cardArrayCreator = (number: number) => {
		setBoardIsShown(false)
		setCardArray([])
		setFlippedCards([])
		setTimeout(() => {
			const cardArray: CardInterface[] = []
			for (let i = 0; i < number * number / 2; i++) {
				for (let j = 0; j < 2; j++) {
					cardArray.push(
						{
							isFlipped: false,
							icon: iconArray[i].icon,
							name: iconArray[i].name,
							cardId: cardIndex
						}
					)
					cardIndex += 1
				}
			}
			setCardArray(arrayShuffle(cardArray))
			setBoardIsShown(true)
		}, 800)
	}

	const cardFlipper = (card: CardInterface) => {
		setCardArray(cardArray.map(arrayCard =>
			arrayCard.cardId === card.cardId
				? { ...arrayCard, isFlipped: true }
				: { ...arrayCard }
		))
		setFlippedCards([...flippedCards, card.name])
	}

	const matchCheck = () => {
		if (flippedCards.length >= 2) {
			if (flippedCards[0] === flippedCards[1]) {
				console.log("win")
			} else {
				console.log("loss")
				setTimeout(() => {
					cardFlipReset(flippedCards)
				}, 1000)
			}
			setFlippedCards([])
		}
	}

	const cardFlipReset = (cardNames: string[]) => {
		console.log(flippedCards)
		let tempArray: CardInterface[] = []
		for (const card of cardArray) {
			if (cardNames.some((cardName) => card.name === cardName)) {
				tempArray.push({ ...card, isFlipped: false })
			} else {
				tempArray.push({ ...card })
			}
		}
		setCardArray(tempArray)
	}

	useEffect(() => {
		matchCheck()
	}, [flippedCards])

	useEffect(() => {
		cardArrayCreator(size)
	}, [size])

	const cardContainerClass =
		`
		h-5/6
		grid 
		grid-cols-${size}
		gap-2
	`

	return (
		<>
			<div className={"w-1/2 h-5/6 border flex justify-around items-center rounded duration-1000"}>
				<div className={"w-1/4 self-end"}>
					<DifficultyPicker setSize={setSize} />
					<div
						className={"self-end w-5/6 flex items-center justify-center bg-cyan-950 m-5 rounded text-white"}
						onClick={() => { cardArrayCreator(size) }}>
						reset
					</div>
				</div>
				{boardIsShown ?
					<div className={cardContainerClass} style={{ aspectRatio: "4/6" }}>
						{
							cardArray.map((card: CardInterface) => {
								return (
									<Card cardFlipper={cardFlipper} card={card} />
								)
							})
						}
					</div>
					: <div className={"h-5/6 flex text-center items-center justify-center"} style={{ aspectRatio: "4/6" }}>
						<div className="flex align-center justify-center h-10">...</div>
					</div>
				}
			</div>
		</>
	)
}
