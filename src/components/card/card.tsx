import { CardInterface } from "context/cardcontext"
import './card.css';

interface CardProps {
	card: CardInterface,
	cardFlipper: Function
}
export const Card: React.FC<CardProps> = ({ cardFlipper, card }) => {
	return (
		<div
			className={"flip-card flex items-center justify-center rounded relative bg-transparent [perspective: 1000px]"}>
			<div
				onClick={() => { if (!card.isFlipped) cardFlipper(card) }}
				className={card.isFlipped 
					? "flip-card-inner is-flipped h-full w-full shadow-black shadow-md rounded relative" 
					: "flip-card-inner h-full w-full rounded relative shadow-black shadow-md"
				}
			>
				<div
					className={"card-face back-face h-full w-full absolute bg-cyan-800 text-3xl rounded flex justify-center items-center"}
				>
					{card.icon}
				</div>
				<div
					className={"card-face front-face bg-cyan-800 h-full w-full absolute text-3xl flex justify-center items-center rounded"}
				>
				</div>
			</div>
		</div>
	)
}
