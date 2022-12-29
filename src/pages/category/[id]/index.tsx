import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useMemo } from "react";
import { categories, products as configProducts } from "../../../config";
import { Link } from "react-router-dom";
import { Category, Product } from "../../../typings/interfaces";
import { useParams } from "react-router-dom";

interface CategoryPageProps {
	locale: "ar" | "en";
}

const CategoryList = ({ locale }: CategoryPageProps) => {
	const { categoryId } = useParams();
	const { category, products } = useMemo(() => {
		const category = categories.find((cat) => cat.id === categoryId)!;
		const products = configProducts.filter((product) =>
			product.categories.includes(category.id),
		);

		return { category, products };
	}, [categoryId]);

	return (
		<div className="">
			<head>
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
			</head>
			<div className="bg-primary-100 fixed  inset-x-0 z-50 max-w-lg mx-auto">
				<div className="flex items-center gap-2 container mx-auto py-2">
					<Link
						to={`/${locale}/`}
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
								to={`/${locale}/category/${
									category.id
								}/${encodeURIComponent(product.title.en)}`}
								key={product.title.en}
								className="grid grid-flow-row grid-cols-6 h-full gap-2.5"
							>
								<div className="col-span-2 h-full">
									<img
										src={product.pictures[0]}
										alt={product.title[locale]}
										width={118}
										height={118}
										className="w-full h-full rounded-md object-cover"
									></img>
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

export default CategoryList;
