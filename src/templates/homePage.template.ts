import { all } from "../locales/all";
import { Category, Product } from "../typings/interfaces";
import { create as createCategoryCard } from "../components/categoryCard.component";
import { create as createNavbar } from "../components/navbar.component";
import { create as createFooter } from "../components/footer.component";

export const create = (
	locale: "ar" | "en",
	trendingProducts: Product[],
	categories: Category[],
) => {
	return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<title>
			Phi Boutique - فاى بوتيك
		</title>
		<meta
			property="og:title"
			content="Phi Boutique - فاى بوتيك"
		/>
		<meta property="og:image" content="/images/assets/logo.png" />
		<meta property="og:site_name" content="Phi Boutique" />
		<meta property="og:type" content="website" />
		<meta name="next-head-count" content="7" />
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
                ${createNavbar(locale, `/${locale}`)}
				<div class="">

                    <div class="container mx-auto w-full">
                        ${categories.map(({ name, id }, index) => {
                            return `
                                <a
                                    href={${`/category/${id}`}}
                                    locale={locale}
                                    class={${`flex items-center justify-between py-4 ${
                                        index !== categories.length - 1
                                            ? "border-b-2 border-netural"
                                            : ""
                                    } `}}
                                    key={id}
                                >
                                    <span class="font-semibold">
                                        ${name[locale]}
                                    </span>
                                    <ChevronRightIcon
                                        class={${`w-6 h-6 ${locale === "ar" ? "rotate-180" : ""}`}}
                                    ></ChevronRightIcon>
                                </a>
                            `;
                        }).join("\n")}
                    </div>

				</div>
                ${createFooter(locale)}
			</div>
		</div>
	</body>
</html>

    `;
};
