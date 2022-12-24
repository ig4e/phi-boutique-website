export interface Category {
	id: string;
	route: string;
	name: {
		ar: string;
		en: string;
	};
	products: Product[];
}

export interface Product {
	route: string;
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
