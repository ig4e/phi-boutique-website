import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import "swiper/css/bundle";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const locale: "en" | "ar" = (router.locale as any) || "en";

	return (
		<div
			className="text-netural font-custom max-w-lg mx-auto bg-white"
			dir={locale === "ar" ? "rtl" : "ltr"}
		>
			<Navbar></Navbar>
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}
