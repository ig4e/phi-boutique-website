import { useRouter } from "next/router";
import React from "react";
import * as locales from "../public/locales/all";

function Footer() {
	const router = useRouter();
	const locale: "en" | "ar" = (router.locale as any) || "en";

	return (
		<>
			<footer className="fixed inset-x-0 bottom-0 bg-white py-4 container mx-auto max-w-lg mx-auto">
				<div className="bg-primary py-2 rounded text-center">
					<h2 className="font-medium">
						{locales.all.pricesIncludesTaxes[locale]}
					</h2>
				</div>
			</footer>
			<div className="h-[72px]"></div>
		</>
	);
}

export default Footer;
