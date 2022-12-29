import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import "./index.css";
import Home from "./pages";
import CategoryList from "./pages/category/[id]";
import Product from "./pages/category/[id]/[slug]";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		children: [
			{
				path: "/en",
				element: <Home locale="en"></Home>,
			},
			{
				path: "/ar",
				element: <Home locale="ar"></Home>,
			},
			{
				path: `/en/category/:categoryId`,
				element: <CategoryList locale="en"></CategoryList>,
			},
			{
				path: `/ar/category/:categoryId`,
				element: <CategoryList locale="ar"></CategoryList>,
			},
			{
				path: `/en/category/:categoryId/:productId`,
				element: <Product locale="en"></Product>,
			},
			{
				path: `/ar/category/:categoryId/:productId`,
				element: <Product locale="ar"></Product>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
