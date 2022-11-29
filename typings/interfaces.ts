export interface Category {
	id: string;
	name: {
		ar: string;
		en: string;
	};
}

export interface Product {
	pictures: string[];
	title: {
		en: string;
		ar: string;
	};
	price: number;
	description: {
		en: string;
		ar: string;
	};
	categories: string[];
}
