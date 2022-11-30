export const trendingProducts = [
	{
		pictures: ["ClassicCaesarSalad.png"],
		title: { en: "Classic Caesar Salad", ar: "سلطة السيزر" },
		price: 38,
		description: {
			en: "our famous caesar salad mixed with\ngrilled romaine and iceberg lettuce\n,parmesan cheeses",
			ar: "سلطة السيزر الشهيرة\nممزوجة بالخس العربي المشوي\nوخس آيس بيرج وجبنة البارميزان",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["Mac&cheese.png"],
		title: { en: "Mac & cheese", ar: "ماك & تشيز" },
		price: 32,
		description: {
			en: "crispy macaroni balls,creamy marinara sauce",
			ar: "كرات المكرونة المقرمشة, صوص المارينارا",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["Phipatata.png"],
		title: { en: "Phi patata", ar: "فاي بتاتا" },
		price: 38,
		description: {
			en: "roasted potato, filled with specialsauce and sourcream.",
			ar: "بطاطس محمرة محشوة بصلصة خاصة وكريمة حامضة.",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["Triohummus.png"],
		title: { en: "Trio hummus(classic,cherry, avocado)", ar: "تريو حمص" },
		price: 32,
		description: {
			en: "three kind of home made mashed chickpea with cherry, and avocado, plain",
			ar: "تقليدي ،واألفوكادو، الكرز ",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["Aranchiniballs.png"],
		title: { en: "Aranchini balls", ar: "أرانشيني بولز" },
		price: 43,
		description: {
			en: "fried crispy rice balls marinara sauce",
			ar: "كرات الأرز المقرمشة المقلية بصلصة المارينارا",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["BoutiqueFries.png"],
		title: { en: "Boutique Fries", ar: "بوتيك فرايز" },
		price: 37,
		description: {
			en: "roasted potato, filled with specialsauce and sourcream.",
			ar: "بطاطس, بريسكت مطبوخ ببطء ,سيراتشا ,وصوص جبن",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["Redshrimp.png"],
		title: { en: "Red shrimp", ar: "ريد شريمب" },
		price: 37,
		description: {
			en: "fried shrimpscoated with buffalo ranch sauc",
			ar: "روبيان مقلي مغطى بصوص بافلو و رانش",
		},
		categories: ["appetizersAndSalads"],
	},
].map((x) => ({
	...x,
	pictures: x.pictures.map((x) => "/images/gallery/" + x),
}));

export const products = [
	{
		pictures: ["ClassicCaesarSalad.png"],
		title: { en: "Classic Caesar Salad", ar: "سلطة السيزر" },
		price: 38,
		description: {
			en: "our famous caesar salad mixed with\ngrilled romaine and iceberg lettuce\n,parmesan cheeses",
			ar: "سلطة السيزر الشهيرة\nممزوجة بالخس العربي المشوي\nوخس آيس بيرج وجبنة البارميزان",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["Mac&cheese.png"],
		title: { en: "Mac & cheese", ar: "ماك & تشيز" },
		price: 32,
		description: {
			en: "crispy macaroni balls,creamy marinara sauce",
			ar: "كرات المكرونة المقرمشة, صوص المارينارا",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["Phipatata.png"],
		title: { en: "Phi patata", ar: "فاي بتاتا" },
		price: 38,
		description: {
			en: "roasted potato, filled with specialsauce and sourcream.",
			ar: "بطاطس محمرة محشوة بصلصة خاصة وكريمة حامضة.",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["Triohummus.png"],
		title: { en: "Trio hummus(classic,cherry, avocado)", ar: "تريو حمص" },
		price: 32,
		description: {
			en: "three kind of home made mashed chickpea with cherry, and avocado, plain",
			ar: "تقليدي ،واألفوكادو، الكرز ",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["Aranchiniballs.png"],
		title: { en: "Aranchini balls", ar: "أرانشيني بولز" },
		price: 43,
		description: {
			en: "fried crispy rice balls marinara sauce",
			ar: "كرات الأرز المقرمشة المقلية بصلصة المارينارا",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["BoutiqueFries.png"],
		title: { en: "Boutique Fries", ar: "بوتيك فرايز" },
		price: 37,
		description: {
			en: "roasted potato, filled with specialsauce and sourcream.",
			ar: "بطاطس, بريسكت مطبوخ ببطء ,سيراتشا ,وصوص جبن",
		},
		categories: ["appetizersAndSalads"],
	},
	{
		pictures: ["Redshrimp.png"],
		title: { en: "Red shrimp", ar: "ريد شريمب" },
		price: 37,
		description: {
			en: "fried shrimpscoated with buffalo ranch sauc",
			ar: "روبيان مقلي مغطى بصوص بافلو و رانش",
		},
		categories: ["appetizersAndSalads"],
	},
	//////////// burger and slider
	{
		pictures: ["Crispychickenslider.png"],
		title: { en: "Crispy chicken slider", ar: "سلايدر الدجاج" },
		price: 29,
		description: {
			en: "Crispy chicken with american cheese special home made sauce",
			ar: "دجاج مقرمش بالجبنة الأمريكية, صلصة خاصة",
		},
		categories: ["burgerAndSlider"],
	},
	{
		pictures: ["PhiBeefburger.png"],
		title: { en: "Phi Beef burger", ar: "فاي برجر" },
		price: 47,
		description: {
			en: "grilled angus beef, melted american truffle cheese, moemade sauce",
			ar: "لحم الأنجوس المشوي,يقدم مع جبنة الترافل",
		},
		categories: ["burgerAndSlider"],
	},
	{
		pictures: ["CrispyChicken.png"],
		title: { en: "Crispy Chicken", ar: "كريسبي تشيكن" },
		price: 43,
		description: {
			en: "Crispy chicken with american cheese special home made sauce",
			ar: "دجاج مقرمش بالجبنة الأمريكية، صلصة الشف الخاصه",
		},
		categories: ["burgerAndSlider"],
	},
	{
		pictures: ["Classicburger.png"],
		title: { en: "Classic burger", ar: "كلاسيك برجر" },
		price: 43,
		description: {
			en: "Grilled angus beef burger,cucumber, lettuce, mayonnaise",
			ar: "برجر لحم أنجوس مشوي ، خيار ، خس ،مايونيز",
		},
		categories: ["burgerAndSlider"],
	},
	{
		pictures: ["Pulledbeefslider.png"],
		title: { en: "Pulled beefslider", ar: "سلايدر لحم" },
		price: 33,
		description: {
			en: "Angus brisket,slow cooked 12 hours, Caramelized onions,smoky barbecue sauce",
			ar: "انجوس بريسكيت مطبوخ ببطء لمدة 12 ساعة، بصل مكرمل ، صلصة باربيكيو المدخن",
		},
		categories: ["burgerAndSlider"],
	},
	//// pizza
	{
		pictures: ["Pizzamargarita.png"],
		title: { en: "Pizza margarita", ar: "مارغريتا بيتزا" },
		price: 33,
		description: {
			en: "served with buffalo mozarella, parmesan cheese, fresh tomato sauce, basil",
			ar: "تقدم مع بوفالو موزاريلا ، جبنة بارميزان ، صلصة طماطم طازجة، ريحان",
		},
		categories: ["pizza"],
	},
	{
		pictures: ["Chickenspicy.png"],
		title: { en: "Chicken spicy", ar: "بيتزا الدجاج" },
		price: 39,
		description: {
			en: "served with marinated chicken breast, onion, jalapenos, fresh tomato sauce",
			ar: "يقدم مع صدردجاج متبل ، بصل ، هالبينو، صلصة طماطم طازجة.",
		},
		categories: ["pizza"],
	},
	{
		pictures: ["Phaipizza.png"],
		title: { en: "Phai pizza", ar: "فاي بيتزا" },
		price: 47,
		description: {
			en: "our signature pizza served with truffle, beef pepperoni, fresh tomato sauce",
			ar: "البيتزا المميزة لدينا تقدم مع الترافل والبيبروني البقري وصلصة الطماطم الطازجة",
		},
		categories: ["pizza"],
	},
	{
		pictures: ["Zatarhaloumipie.png"],
		title: { en: "Zatar haloumi pie", ar: "زعتر مع جبنة حلوم" },
		price: 31,
		description: {
			en: "served with fresh oregano and sesame , topped with haloumicheese , baby arugula",
			ar: "تقدم مع الزعتر الطازج والسمسم ،مغطاة بجبنة الحلوم وجرجير صغير",
		},
		categories: ["pizza"],
	},
	//////////// pasta

	{
		pictures: ["PennePinkSauce.png"],
		title: { en: "Penne pink sauce", ar: "بيني باستا الوردية" },
		price: 41,
		description: {
			en: "penne pasta , tossed in pink sauce , parmesan cheese",
			ar: "بيني باستا مغموسة بالصوص الوردي وجبنة البارميزان",
		},
		categories: ["pasta"],
	},
	{
		pictures: ["wildRisotto.png"],
		title: { en: "wild Risotto", ar: "زعتر مع جبنة حلوم" },
		price: 55,
		description: {
			en: "italian abrborio rice,cooked with wild mushrooms and truffle",
			ar: "ارز ابر بور يو الأيطالي مطبوخ مع الفطر البري والترفل",
		},
		categories: ["pasta"],
	},
	{
		pictures: ["FettucciniAlfredo.png"],
		title: { en: "Fettuccini Alfredo", ar: "فيتوتتشيني الفريدو" },
		price: 49,
		description: {
			en: "fresh portobello mushroom ,cream sauce, tossed with fettucini pasta",
			ar: "فطر بور تبيللو طازج ,صوص كريمة مع باستا فيتوتشيني",
		},
		categories: ["pasta"],
	},
	//// Main dishes
	{
		pictures: ["RibEyeSteak.png"],
		title: { en: "Rib eye steak", ar: "ريب اي ستيك" },
		price: 119,
		description: {
			en: "grilled angusrib-eye served with mashed potato and asparagus mushroom and peppersauce ,",
			ar: "ريب اي انجوس مشوي يقدم مع البطاطس المهروسة والهليون و صوص الفطر و صوص الفلفل",
		},
		categories: ["mainDishes"],
	},
	{
		pictures: ["GrilledSalmon.png"],
		title: { en: "Grilled salmon", ar: "سالمون ستيك" },
		price: 79,
		description: {
			en: "grilled salmon,served with edive lettuce creamy citrussauce,crusted pistacio",
			ar: "سلمون مشوي ، يقدم مع خس النديف، كريمة حمضيات ،فستق حلبي مقرمش",
		},
		categories: ["mainDishes"],
	},
	{
		pictures: ["CrispyChickenParmigana.png"],
		title: { en: "Crispy chicken parmigana", ar: "تشيكن بارميزان" },
		price: 69,
		description: {
			en: "breaded chiciken breast melted parmesan cheese, baby arugula salad",
			ar: "صدر دجاج بالبقسماط جبنة باميزان ذائبة, سلطة جرجير",
		},
		categories: ["mainDishes"],
	},
	/// tagine
	{
		pictures: ["ChickenStraganoff.png"],
		title: { en: "Chicken straganoff", ar: "تشيكن استراغنوف" },
		price: 65,
		description: {
			en: "shreded chicken tossed with creamy mushroom sauce ,steamed rice",
			ar: "دجاج مقطع مغطى بصلصة كريمة الفطر وأرز مطهو على البخار",
		},
		categories: ["tagine"],
	},
	{
		pictures: ["ChickenAlaKing.png"],
		title: { en: "Chicken ala king", ar: "تشيكن الاكينغ" },
		price: 63,
		description: {
			en: "chciken breastcooked with fresh cream , mushroombell pepper, melted mozarella cheese and steamd rice",
			ar: "قطع الدجاج المطبوخة مع الكريمة الطازجة والفطر والفلفل الرومي وجبنة الموزاريلا الذائبةوالأرز بالبخار",
		},
		categories: ["tagine"],
	},
	{
		pictures: ["SteakAndMushrooms.png"],
		title: { en: "Steak and mushrooms", ar: "ستيك ماشروم" },
		price: 75,
		description: {
			en: "shreded tenderloin steak, mushroom, onion,creamy gravy sauce, and steamed rice",
			ar: "شرائح لحم تندرلوين ،مشروم ، بصل ، صوص جريفي، أرز مطهو على البخار",
		},
		categories: ["tagine"],
	},
	// Sweets
	{
		pictures: ["BakedSanSebastian.png"],
		title: { en: "baked san sebastian", ar: "سان سيباستيان" },
		price: 37,
		description: {
			en: "baked cheese cake ,chocolate sauce",
			ar: "تشيزكيك مخبوزة، صوص شوكلاتة",
		},
		categories: ["sweets"],
	},
	{
		pictures: ["CheeseCake.png"],
		title: { en: "Cheese cake", ar: "تشيز كيك" },
		price: 39,
		description: {
			en: "an artcreated in phi boutique",
			ar: "تشيزكيك المميز في فاي بوتيك",
		},
		categories: ["sweets"],
	},
	{
		pictures: ["MixChocolateBrownie.png"],
		title: { en: "Mix chocolate brownie", ar: "براونيز" },
		price: 39,
		description: {
			en: "two layers of brownie cake, melted two kind of choclate sauce",
			ar: "طبقتين من كعكة البراوني الساخنه تقدم مع نوعين من صوص الشوكلاتة",
		},
		categories: ["sweets"],
	},
	{
		pictures: ["Pancake.png"],
		title: { en: "Pancake", ar: "بانكيك" },
		price: 35,
		description: {
			en: "classic pancake , warm chcolate sauce",
			ar: "كلاسيك بان كيك، صلصة الشوكولاتة الدافئة",
		},
		categories: ["sweets"],
	},
	{
		pictures: ["DateCake.png"],
		title: { en: "Date Cake", ar: "كيكة التمر" },
		price: 37,
		description: {
			en: "fresh warm date cake ,caramelsauce",
			ar: "كيك التمر الطازج الدافئ ، صوص الكراميل",
		},
		categories: ["sweets"],
	},

	{
		pictures: ["FrenchToast.png"],
		title: { en: "French toast", ar: "فرنش توست" },
		price: 45,
		description: {
			en: "home made rollsfilled with caramelsauce",
			ar: "لفائف محشوة بصلصة الكراميل",
		},
		categories: ["sweets"],
	},
	// Drinks
	{
		pictures: ["SaudiCoffee.png"],
		title: { en: "Saudi Coffee", ar: "قهوة سعودية" },
		price: 39,
		description: {
			en: "",
			ar: "",
		},
		categories: ["drinks"],
	},
	{
		pictures: ["LemonWithMint.png"],
		title: { en: "Lemon with Mint", ar: "ليمون ونعناع" },
		price: 18,
		description: {
			en: "",
			ar: "",
		},
		categories: ["drinks"],
	},
	{
		pictures: ["Oranje.png"],
		title: { en: "Oranje", ar: "برتقال" },
		price: 18,
		description: {
			en: "",
			ar: "",
		},
		categories: ["drinks"],
	},
	{
		pictures: ["MixBerriesMojito.png"],
		title: { en: "Mix Berries Mojito", ar: "مكس بيري موهيتو" },
		price: 27,
		description: {
			en: "",
			ar: "",
		},
		categories: ["drinks"],
	},
	{
		pictures: ["PassionFruit.png"],
		title: { en: "Passion Fruit", ar: "باشن فروت موهيتو" },
		price: 27,
		description: {
			en: "",
			ar: "",
		},
		categories: ["drinks"],
	},
].map((x) => ({
	...x,
	pictures: x.pictures.map((x) => "/images/gallery/" + x),
}));

export const categories = [
	{
		name: { ar: "المقبلات والسلطات", en: "Appetizers and salads" },
		id: "appetizersAndSalads",
	},
	{
		name: { ar: "برجر و سلايدر", en: "Burger and Slider" },
		id: "burgerAndSlider",
	},
	{
		name: { ar: "بيتزا", en: "Pizza" },
		id: "pizza",
	},
	{
		name: { ar: "باستا", en: "Pasta" },
		id: "pasta",
	},
	{
		name: { ar: "الأطباق الرئيسية", en: "Main Dishes" },
		id: "mainDishes",
	},
	{
		name: { ar: "طاجين", en: "Tagine" },
		id: "tagine",
	},
	{
		name: { ar: "حلويات", en: "Sweets" },
		id: "sweets",
	},
	{
		name: { ar: "مشروبات", en: "Drinks" },
		id: "drinks",
	},
];
