import { all } from "../locales/all";
import { Category } from "../typings/interfaces";
import { create as createCategoryCard } from "../components/categoryCard.component";
import { create as createNavbar } from "../components/navbar.component";
import { create as createFooter } from "../components/footer.component";

export const create = (locale: "ar" | "en", category: Category) => {
	return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<title>
			Phi Boutique - فاى بوتيك | ${category.name[locale]} ${all.page[locale]}
		</title>
		<meta
			property="og:title"
			content="Phi Boutique - فاى بوتيك | ${category.name[locale]} ${
		all.page[locale]
	}"
		/>
		<meta property="og:image" content="/images/assets/logo.png" />
		<meta property="og:site_name" content="Phi Boutique" />
		<meta property="og:type" content="website" />
		<meta name="next-head-count" content="7" />
        <link
			rel="stylesheet"
			href="http://localhost:3000/all.css"
			data-n-g=""
		/>
	</head>
	<body class="">
		<div>
			<div class="text-netural font-custom max-w-lg mx-auto" dir="${
				locale === "en" ? "ltr" : "rtl"
			}">
                ${createNavbar(locale, category.route)}
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
					<div class="container mx-auto">
						<div class="flex flex-col gap-4 mt-4">
							${category.products
								.map((product) =>
									createCategoryCard(locale, product),
								)
								.join("\n")}
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
