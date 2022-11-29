import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories, trendingProducts } from "../public/config";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import * as locales from "../public/locales/all";
import { useMemo } from "react";
import { Navigation, Thumbs } from "swiper";
import Head from "next/head";

export default function Home() {
	const router = useRouter();
	const locale: "en" | "ar" = (router.locale as any) || "en";

	return (
		<div className="">
			<Head>
				<title>
					Phi Boutique - فاى بوتيك |{" "}
					{locale === "ar" ? "الصفحة الرئيسية" : "Main Page"}
				</title>
				<meta
					property="og:title"
					content={`Phi Boutique - فاى بوتيك | ${
						locale === "ar" ? "الصفحة الرئيسية" : "Main Page"
					}`}
					key="title"
				/>
			</Head>

			<Swiper
				className="w-full h-[25vh] bg-primary"
				slidesPerView={1}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				autoplay={true}
				dir={locale === "ar" ? "rtl" : "ltr"}
				key={locale === "ar" ? "rtl" : "ltr"}
				modules={[Thumbs, Navigation]}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
			>
				<div className="swiper-button-prev !text-white"></div>
				<div className="swiper-button-next !text-white"></div>
				{trendingProducts.map((product) => {
					return (
						<SwiperSlide key={product.title[locale]}>
							<div className="w-full">
								<Image
									src={product.pictures[0]}
									layout={"fill"}
									alt={product.title[locale]}
									className="object-cover"
								></Image>
								<div className="absolute w-full h-full inset-0 bg-gradient-to-t from-primary to-transparent z-10" />

								<div className="absolute w-full inset-x-0 bottom-0 text-neutral z-50 container mx-auto py-4 flex items-center justify-between gap-2">
									<h1 className="font-semibold text-xl truncate">
										{product.title[locale]}
									</h1>

									<div className="bg-netural py-0.5 px-3 text-sm rounded-full text-white">
										<span className="font-bold whitespace-nowrap">
											{product.price} SAR
										</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="relative">
				<div className="bg-primary">
					<div className="container mx-auto py-2">
						<p className="">
							{locales.all.wariningMessage[locale]}
						</p>
					</div>
				</div>

				<div className="container mx-auto">
					{categories.map(({ name, id }, index) => {
						return (
							<Link
								href={`/category/${id}`}
								locale={locale}
								className={`flex items-center justify-between py-4 ${
									index !== categories.length - 1
										? "border-b-2 border-netural"
										: ""
								} `}
								key={id}
							>
								<span className="font-semibold">
									{name[locale]}
								</span>
								<ChevronRightIcon
									className={`w-6 h-6 ${
										locale === "ar" ? "rotate-180" : ""
									}`}
								></ChevronRightIcon>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
