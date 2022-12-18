import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import { getLocalizedUrl } from "../utils/getLocalizedUrl";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const language: "en" | "ar" = (
		typeof window !== "undefined" &&
		["ar", "en"].includes(window.navigator.language)
			? window.navigator.language
			: "en"
	) as any;

	const [locale, setLocale] = useState<"en" | "ar">(language || "en");

	useEffect(() => {
		console.log(
			getLocalizedUrl(router.pathname.replace("[lang]", ""), locale),
		);

		console.log(
			getLocalizedUrl(router.asPath.replace("[lang]", ""), locale),
		);
		router.push(
			getLocalizedUrl(router.asPath.replace("[lang]", ""), locale),
		);
	}, [locale]);

	return (
		<div
			className="text-netural font-custom max-w-lg mx-auto"
			dir={locale === "ar" ? "rtl" : "ltr"}
		>
			<Navbar locale={locale} setLocale={setLocale}></Navbar>
			<Component {...pageProps} locale={locale} />
			<Footer locale={locale} />
		</div>
	);
}
