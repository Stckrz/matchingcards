import React, { SetStateAction } from 'react';
import style from './difficulty.module.css';

interface DifficultyPickerProps {
	setSize: React.Dispatch<SetStateAction<number>>
}
export const DifficultyPicker: React.FC<DifficultyPickerProps> = ({ setSize }) => {
	return (
		<>
			<div className={style.difficultyWrapper}>
				<div 
					className={style.difficultyButton} 
					onClick={() => { setSize(2) }}>2
				</div>
				<div 
					className={style.difficultyButton} 
					onClick={() => { setSize(4) }}>4
				</div>
				<div 
					className={style.difficultyButton} 
					onClick={() => { setSize(6) }}>6
				</div>
			</div>
		</>
	)
}
