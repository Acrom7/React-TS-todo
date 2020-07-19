export interface ITodoItem {
	id: string,
	text: string,
	completed: boolean,
	color?: Colors,
}

export enum Colors {
	Rose = '#FFAB91',
	Chardonnay = '#FFCC80',
	Reef = '#E6EE9B',
	Sky = '#80DEEA',
	Wisteria = '#CF93D9',
	Mauvelous = '#F48FB1',
}