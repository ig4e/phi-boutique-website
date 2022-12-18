export function getLocalizedUrl(url: string, local: "ar" | "en") {
	const [currentUrlLocal] = url.split("/").filter((x) => x);
	if (!["ar", "en"].includes(currentUrlLocal))
		return `/${local}/${url}`.replaceAll("//", "/");

	return url.replace(currentUrlLocal, local);
}
