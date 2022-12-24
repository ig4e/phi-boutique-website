import { all } from "../locales/all";
import { Category, Product } from "../typings/interfaces";
import { create as createCategoryCard } from "../components/categoryCard.component";
import { create as createNavbar } from "../components/navbar.component";
import { create as createFooter } from "../components/footer.component";

export const create = (
	locale: "ar" | "en",
	category: Category,
	product: Product,
) => {
	return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<title>Phi Boutique - فاى بوتيك | ${product.title[locale]}</title>
		<meta
			property="og:title"
			content="Phi Boutique - فاى بوتيك | ${product.title[locale]}"
		/>
		<meta
			name="description"
			content="Phi Boutique - فاى بوتيك | ${category.name[locale]} / ${
		product.title[locale]
	}\n${product.description[locale]}"
		/>
		
		<meta
			name="og:description"
			content="Phi Boutique - فاى بوتيك | ${category.name[locale]} / ${
		product.title[locale]
	}\n${product.description[locale]}"
		/>

		<meta
			property="og:image"
			content="${product.pictures[0]}"
		/>

		<meta property="og:site_name" content="Phi Boutique" />
		<meta property="og:type" content="website" />
		<meta name="next-head-count" content="9" />
        <link
			rel="stylesheet"
			href="http://localhost:3000/all.css"
		/>
	</head>
	<body class="">
		<div>
			<div class="text-netural font-custom max-w-lg mx-auto" dir="${
				locale === "en" ? "ltr" : "rtl"
			}">
                ${createNavbar(locale, product.route)}
				<div class="">
					<div
						class="bg-primary-100 fixed inset-x-0 z-50 max-w-lg mx-auto"
					>
						<div
							class="flex items-center gap-2 container mx-auto py-2"
						>
							<a class="p-2 bg-primary rounded-md" href="/${locale}"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									class="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
									></path></svg
							></a>
							<h2 class="text-lg font-semibold">
                                ${category.name[locale]}
							</h2>
						</div>
					</div>
					<div class="h-[56px] relative"></div>
					<div class="swiper w-full h-[25vh] bg-primary" dir="ltr">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="relative h-[25vh]">
									<img
										alt="${product.title[locale]}"
										src="${product.pictures[0]}"
										decoding="async"
										data-nimg="fill"
										class="object-cover inset-0"
										loading="lazy"
										style="
											position: absolute;
											height: 100%;
											width: 100%;
											left: 0;
											top: 0;
											right: 0;
											bottom: 0;
											color: transparent;
										"
									/>
								</div>
							</div>
						</div>
						<div class="swiper-button-prev !text-white"></div>
						<div class="swiper-button-next !text-white"></div>
					</div>
					<div class="container mx-auto">
						<div class="my-4">
							<div
								class="w-full text-neutral flex items-center justify-between gap-2"
							>
								<h1 class="font-semibold text-xl truncate">
									${product.title[locale]}
								</h1>
								<div
									class="bg-netural py-0.5 px-3 text-sm rounded-full text-white"
								>
									<span class="font-bold whitespace-nowrap">${product.price} SAR</span>
								</div>
							</div>
							<p>
								${product.description[locale]}
							</p>
						</div>
						<div class="p-3 bg-primary rounded font-medium">
							<p>
								${all.wariningMessage[locale]}
							</p>
						</div>
					</div>
				</div>
                ${createFooter(locale)}
			</div>
		</div>
	</body>
</html>

    `;
};
