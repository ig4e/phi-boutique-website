import { Product } from "../typings/interfaces";

export const create = (locale: "ar" | "en", product: Product) => {
	return `<a
        class="grid grid-flow-row grid-cols-6 h-full gap-2.5"
        href="${product.route}"
        ><div class="col-span-2 h-full">
            <img
                alt="${product.title[locale]}"
                src="${product.pictures[0]}"
                width="118"
                height="118"
                decoding="async"
                data-nimg="1"
                class="w-full h-full rounded-md object-cover"
                loading="lazy"
                style="color: transparent"
            />
        </div>
        <div class="flex flex-col col-span-4 gap-2">
            <h1 class="font-semibold text-lg truncate">
            ${product.title[locale]}
            </h1>
            <p class="line-clamp-2">
            ${product.description[locale]}
            </p>
            <div
                class="bg-netural py-0.5 px-3 text-sm rounded-full text-white w-fit"
            >
                <span
                    class="font-bold whitespace-nowrap"
                    >${product.price} SAR</span
                >
            </div>
        </div>
    </a>`;
};
