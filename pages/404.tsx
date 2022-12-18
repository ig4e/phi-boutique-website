import React from "react";

function NotFoundError({ locale }: { locale: "ar" | "en" }) {
	return (
		<div className="grid place-items-center min-h-[80vh]">
			<h1 className="font-bold text-4xl">
				{locale === "en" ? "Loading.." : "جارى التحميل..."}
			</h1>
		</div>
	);
}

export default NotFoundError;
