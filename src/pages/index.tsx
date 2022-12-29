import { Swiper, SwiperSlide } from "swiper/react";
import { categories, trendingProducts } from "../config";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as locales from "../locales/all";
import { useMemo } from "react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css/bundle";

export default function Home({ locale }: { locale: "en" | "ar" }) {
	return (
		<div>
			<head>
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

				<meta
					name="description"
					content={`Phi Boutique - فاى بوتيك | ${
						locale === "ar"
							? `أكثر من 250 طبق محضر طازج يومياً`
							: `MORE THAN 250 DISHES MADE FRESH EVERY DAY`
					}`}
				/>

				<meta
					name="og:description"
					content={`Phi Boutique - فاى بوتيك | ${
						locale === "ar"
							? `أكثر من 250 طبق محضر طازج يومياً`
							: `MORE THAN 250 DISHES MADE FRESH EVERY DAY`
					}`}
				/>

				<meta property="og:image" content={"/images/assets/logo.png"} />
				<meta property="og:site_name" content="Phi Boutique"></meta>
				<meta property="og:type" content="website" />
			</head>

			<Swiper
				className="w-full h-[25vh] bg-primary"
				slidesPerView={1}
				onSwiper={(swiper) => console.log(swiper)}
				autoplay={true}
				direction={"horizontal"}
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
							<Link
								to={`/${locale}/category/${
									product.categories[0]
								}/${encodeURIComponent(product.title.en)}`}
								className="relative w-full h-full"
							>
								<img
									src={product.pictures[0]}
									alt={product.title[locale]}
									className="object-cover h-full w-full"
								></img>

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
							</Link>
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
								to={`/${locale}/category/${id}`}
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
