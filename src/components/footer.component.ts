import { all } from "../locales/all";

export const create = (locale: "ar" | "en") => {
	return `	<footer
    class="fixed inset-x-0 bottom-0 bg-white py-4 container mx-auto max-w-lg"
>
    <div class="bg-primary py-2 rounded text-center">
        <h2 class="font-medium">${all.pricesIncludesTaxes[locale]}</h2>
    </div>
</footer>
<div class="h-[72px]"></div>`;
};
