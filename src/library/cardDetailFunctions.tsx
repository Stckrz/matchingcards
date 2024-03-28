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
	GiSecretBook,
	GiTombstone,
	GiStoneTower,
	GiSloth,
	GiPotionBall,
	GiPowerButton,
	GiPoisonBottle
} from 'react-icons/gi';

export function arrayShuffle(array: any[]) {
	for (let i = 0; i < array.length; i++) {
		let randnum = Math.floor(Math.random() * array.length)
		let temp = array[i]
		array[i] = array[randnum]
		array[randnum] = temp
	}
	return array
}

export const iconArray = [
	{
		name: "Space",
		icon: < FaSpaceAwesome />,
	},
	{
		name: "Sentry",
		icon: < GiSentryGun />,
	},
	{
		name: "Bolt",
		icon: < GiBoltBomb />,
	},
	{
		name: "Cash",
		icon: < GiCash />,
	},
	{
		name: "Heart",
		icon: < GiChewedHeart />,
	},
	{
		name: "Donut",
		icon: < GiDonut />,
	},
	{
		name: "Flower",
		icon: < GiFireFlower />,
	},
	{
		name: "FirstAid",
		icon: < GiFirstAidKit />,
	},
	{
		name: "Muscle",
		icon: < GiMuscleUp />,
	},
	{
		name: "Laser",
		icon: < GiLaserGun />,
	},
	{
		name: "Book",
		icon: < GiSecretBook />,
	},
	{
		name: "Mushroom",
		icon: < GiMushroomCloud />,
	},
	{
		name: "Tombstone",
		icon: < GiTombstone />,
	},
	{
		name: "Tower",
		icon: < GiStoneTower />,
	},
	{
		name: "Sloth",
		icon: < GiSloth />,
	},
	{
		name: "Potion",
		icon: < GiPotionBall />,
	},
	{
		name: "Power",
		icon: < GiPowerButton />,
	},
	{
		name: "Poison",
		icon: < GiPoisonBottle />,
	}
]
