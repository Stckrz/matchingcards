import React, { SetStateAction } from 'react';
interface DifficultyPickerProps {
	setSize: React.Dispatch<SetStateAction<number>>
}
export const DifficultyPicker: React.FC<DifficultyPickerProps> = ({ setSize }) => {
	return (
		<>
			<div className={"w-1/2 h-12 rounded flex gap-5 justify-evenly bg-green-200 p-1"}>
				<div 
					className={"aspect-square rounded-full h-full flex items-center justify-center bg-blue-500 "} 
					onClick={() => { setSize(2) }}>2
				</div>
				<div 
					className={"aspect-square rounded-full h-full flex items-center justify-center bg-blue-500"} 
					onClick={() => { setSize(4) }}>4
				</div>
				<div 
					className={"aspect-square rounded-full h-full flex items-center justify-center bg-blue-500"} 
					onClick={() => { setSize(6) }}>6
				</div>
			</div>
		</>
	)
}
