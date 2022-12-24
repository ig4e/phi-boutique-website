import { categories, products, trendingProducts } from "./config";
import { create as createCategoryPage } from "./templates/categoryPage.template";
import { create as createProductPage } from "./templates/productPage.template";

import fs from "fs";

import express from "express";
import path from "path";

import { minify } from "html-minifier";
import { create } from "./templates/homePage.template";

const app = express();

const allCategoriesWithProducts = categories.map((category) => {
	return {
		id: category.id,
		route: `category/${category.id}`,
		name: category.name,
		products: products
			.filter((product) =>
				product.categories.some(
					(productCategory) => productCategory === category.id,
				),
			)
			.map((product) => ({
				route: `category/${category.id}/${encodeURIComponent(
					product.title.en,
				)}`,
				...product,
			})),
	};
});

const allCategoriesWithProductsWithLocalizedRoutes = ["ar", "en"]
	.map((locale) =>
		allCategoriesWithProducts.map((category) => ({
			...category,
			route: `/${locale}/${category.route}`,
			products: category.products.map((product) => ({
				...product,
				route: `/${locale}/category/${category.id}/${encodeURIComponent(
					product.title.en,
				)}`,
			})),
		})),
	)
	.reduce((total, current) => [...total, ...current], []);

allCategoriesWithProductsWithLocalizedRoutes.map((category) => {
	const categoryPage = minify(
		createCategoryPage(
			category.route.startsWith("/ar") ? "ar" : "en",
			category,
		),
		{
			removeComments: true,
			removeEmptyAttributes: true,
			removeTagWhitespace: true,
			collapseWhitespace: true,
			collapseInlineTagWhitespace: true,
		},
	);

	try {
		fs.mkdirSync(`./htmlOut${category.route}`);
	} catch {}

	fs.writeFileSync(`./htmlOut${category.route}.html`, categoryPage, "utf-8");

	category.products.map((product) => {
		const categoryProductPage = minify(
			createProductPage(
				category.route.startsWith("/ar") ? "ar" : "en",
				category,
				product,
			),
			{
				removeComments: true,
				removeEmptyAttributes: true,
				removeTagWhitespace: true,
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
			},
		);

		fs.writeFileSync(
			`./htmlOut${product.route}.html`,
			categoryProductPage,
			"utf-8",
		);
	});
});


const homeEnPage = create("en", allCategoriesWithProductsWithLocalizedRoutes[0].products, allCategoriesWithProductsWithLocalizedRoutes)

fs.writeFileSync(`./htmlOut/en.html`, homeEnPage, "utf-8");



app.get("/all.css", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/all.css"));
});

app.get("/images/gallery/:imgName", (req, res) => {
	const fileName = req.params.imgName;
	return res.sendFile(
		path.join(__dirname, "../public/images/gallery/" + fileName),
	);
});

app.get("/images/assets/:imgName", (req, res) => {
	const fileName = req.params.imgName;
	return res.sendFile(
		path.join(__dirname, "../public/images/assets/" + fileName),
	);
});

app.listen(3000);
