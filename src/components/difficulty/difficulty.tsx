import React, { useState, SetStateAction } from 'react';

interface DifficultyPickerProps {
	setSize: React.Dispatch<SetStateAction<number>>
}
export const DifficultyPicker: React.FC<DifficultyPickerProps> = ({ setSize }) => {
	const difficulties: number[] = [2, 4, 6]
	const [active, setActive] = useState(2)

	const setDifficulty = (n: number) => {
		setActive(n)	
		setSize(n)
	}
	const difficultyButton = (num: number) => {
		return (
			<div
				className={num === active 
					? "rounded-full bg-cyan-500 aspect-square w-1/6 flex items-center justify-center m-2 shadow-black shadow-inner" 
					: "rounded-full bg-cyan-500 aspect-square w-1/6 flex items-center justify-center m-2 shadow-black shadow-md"
				}
				onClick={() => { setDifficulty(num) }}>
				{num}
			</div>
		)
	}
	return (
		<>
			<div className={"w-5/6 flex items-center justify-evenly bg-cyan-950 m-5 rounded"}>
				{
					difficulties.map((difficulty) => {
						return (
							difficultyButton(difficulty)

						)
					})
				}
			</div>
		</>
	)
}
