import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Root() {
	const location = useLocation();
	const locale = location.pathname.match(/\/(en|ar)/)?.[1] as "ar" | "en";

	return (
		<>
			<div
				dir={locale === "ar" ? "rtl" : "ltr"}
				className="text-netural font-custom max-w-lg mx-auto"
			>
				<Navbar locale={locale}></Navbar>
				<div className="max-w-lg mx-auto">
					<Outlet></Outlet>
				</div>
				<Footer locale={locale}></Footer>
			</div>
		</>
	);
}

export default Root;
