import { FaSpaceAwesome } from 'react-icons/fa6';
import {
	GiSentryGun,
	GiBoltBomb,
	GiCash,
	GiChewedHeart,
	GiDonut,
	GiFireFlower,
	GiFirstAidKit,
	GiMuscleUp,
	GiMushroomCloud,
	GiLaserGun,
	GiSecretBook
} from 'react-icons/gi';

export function arrayShuffle(array: any[]){
	for (let i = 0; i < array.length; i++) {
		let randnum = Math.floor(Math.random() * array.length)
		let temp = array[i]
		array[i] = array[randnum]
		array[randnum] = temp
	}
	return array
}

export const iconArray = [
		< FaSpaceAwesome />, 
		< GiSentryGun />,
		< GiBoltBomb />,
		< GiCash />,
		< GiChewedHeart />,
		< GiDonut />,
		< GiFireFlower />,
		< GiFirstAidKit />,
		< GiMuscleUp />,
		< GiLaserGun />,
		< GiSecretBook /> 
]
