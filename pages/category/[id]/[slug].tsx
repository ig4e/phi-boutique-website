import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories, products } from "../../../public/config";
import { Category, Product } from "../../../typings/interfaces";
import * as locales from "../../../public/locales/all";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Navigation, Thumbs } from "swiper";
import Head from "next/head";

interface ProductPageProps {
	category: Category;
	product: Product;
}

const Product: NextPage<ProductPageProps> = ({ category, product }) => {
	const router = useRouter();
	const locale: "en" | "ar" = (router.locale as any) || "en";

	return (
		<div>
			<Head>

				

				<title>
					Phi Boutique - فاى بوتيك |{" "}
					{locale === "ar"
						? `صفحة ${category.name[locale]} / ${product.title[locale]}`
						: `${category.name[locale]} / ${product.title[locale]} Page`}
				</title>

				<meta
					property="og:title"
					content={`Phi Boutique - فاى بوتيك | 
					${
						locale === "ar"
							? `صفحة ${category.name[locale]} / ${product.title[locale]}`
							: `${category.name[locale]} / ${product.title[locale]} Page`
					}`}
					key="title"
				/>

				<meta
					name="description"
					content={`Phi Boutique - فاى بوتيك | ${
						locale === "ar"
							? `صفحة ${category.name[locale]} / ${product.title[locale]}`
							: `${category.name[locale]} / ${product.title[locale]} Page`
					}\n${product.description[locale]}`}
				/>

				<meta
					name="og:description"
					content={`Phi Boutique - فاى بوتيك | ${
						locale === "ar"
							? `صفحة ${category.name[locale]} / ${product.title[locale]}`
							: `${category.name[locale]} / ${product.title[locale]} Page`
					}\n${product.description[locale]}`}
				/>

				<meta property="og:site_name" content="Phi Boutique"></meta>
				<meta property="og:type" content="website" />

			</Head>

			<div className="bg-primary-100 fixed  inset-x-0 z-50 max-w-lg mx-auto">
				<div className="flex items-center gap-2 container mx-auto py-2">
					<Link
						href={`/category/${category.id}`}
						locale={locale}
						className="p-2 bg-primary rounded-md"
					>
						<ArrowLeftIcon
							className={`w-6 h-6 ${
								locale === "ar" ? "rotate-180" : ""
							}`}
						></ArrowLeftIcon>
					</Link>
					<h2 className="text-lg font-semibold">
						{category.name[locale]}
					</h2>
				</div>
			</div>
			<div className="h-[56px] relative"></div>
			<Swiper
				className="w-full h-[25vh] bg-primary"
				slidesPerView={1}
				onSlideChange={() => console.log("slide change")}
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
				{product.pictures.map((picture, index) => {
					return (
						<SwiperSlide
							key={
								product.title[locale] +
								"-" +
								picture +
								"-" +
								index
							}
						>
							<div className="relative h-[25vh]">
								<Image
									src={picture}
									layout={"fill"}
									alt={product.title[locale]}
									className="object-cover inset-0"
								></Image>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>

			<div className="container mx-auto">
				<div className="my-4">
					<div className="w-full text-neutral flex items-center justify-between gap-2">
						<h1 className="font-semibold text-xl truncate">
							{product.title[locale]}
						</h1>

						<div className="bg-netural py-0.5 px-3 text-sm rounded-full text-white">
							<span className="font-bold whitespace-nowrap">
								{product.price} SAR
							</span>
						</div>
					</div>
					<p>{product.description[locale]}</p>
				</div>

				<div className="p-3 bg-primary rounded font-medium">
					<p>{locales.all.wariningMessage[locale]}</p>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const categoryId = context.params?.id! as string;
	const productId = decodeURIComponent(context.params?.slug! as string);

	const category = categories.find((cat) => cat.id === categoryId)!;
	const product = products.find((product) => product.title.en === productId)!;

	return {
		props: {
			category,
			product: product,
		},
	};
};

export default Product;
