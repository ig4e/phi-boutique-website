import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { categories, products } from "../../../../public/config";
import { useRouter } from "next/router";
import * as locales from "../../../../public/locales/all";
import { Category, Product } from "../../../../typings/interfaces";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

interface CategoryPageProps {
	category: Category;
	products: Product[];
	locale: "en" | "ar";
}

const CategoryList: NextPage<CategoryPageProps> = ({
	category,
	products,
	locale,
}) => {
	return (
		<div className="">
			<Head>
				<title>
					Phi Boutique - فاى بوتيك |{" "}
					{locale === "ar"
						? `صفحة ${category.name[locale]}`
						: `${category.name[locale]} Page`}
				</title>

				<meta
					property="og:title"
					content={`Phi Boutique - فاى بوتيك | ${
						locale === "ar"
							? `صفحة ${category.name[locale]}`
							: `${category.name[locale]} Page`
					}`}
					key="title"
				/>

				<meta property="og:image" content={"/images/assets/logo.png"} />
				<meta property="og:site_name" content="Phi Boutique"></meta>
				<meta property="og:type" content="website" />
			</Head>
			<div className="bg-primary-100 fixed  inset-x-0 z-50 max-w-lg mx-auto">
				<div className="flex items-center gap-2 container mx-auto py-2">
					<Link
						href={`/${locale}/`}
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

			<div className="container mx-auto">
				<div className="flex flex-col gap-4 mt-4">
					{products.map((product) => {
						return (
							<Link
								href={`/${locale}/category/${
									category.id
								}/${encodeURIComponent(product.title.en)}`}
								key={product.title.en}
								className="grid grid-flow-row grid-cols-6 h-full gap-2.5"
							>
								<div className="col-span-2 h-full">
									<Image
										src={product.pictures[0]}
										alt={product.title[locale]}
										width={118}
										height={118}
										className="w-full h-full rounded-md object-cover"
									></Image>
								</div>
								<div className="flex flex-col  col-span-4 gap-2">
									<h1 className="font-semibold text-lg truncate">
										{product.title[locale]}
									</h1>
									<p className="line-clamp-2">
										{product.description[locale]}
									</p>
									<div className="bg-netural py-0.5 px-3 text-sm rounded-full text-white w-fit">
										<span className="font-bold whitespace-nowrap">
											{product.price} SAR
										</span>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const categoryId = context.params?.id! as string;
	const category = categories.find((cat) => cat.id === categoryId)!;
	return {
		props: {
			category,
			products: products.filter((product) =>
				product.categories.includes(category.id),
			),
		},
	};
};

export default CategoryList;
