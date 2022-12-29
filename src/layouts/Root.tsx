import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Root({ children }: { children?: any }) {
	const [locale, setLocale] = useState<"en" | "ar">("en");
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const extractLocale = location.pathname.match(/\/(en|ar)/)?.[1] as
			| "ar"
			| "en"
			| undefined;

		console.log(extractLocale);

		if (extractLocale) {
			setLocale(extractLocale);
		} else {
			navigate("/en");
		}
	}, [location]);

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
