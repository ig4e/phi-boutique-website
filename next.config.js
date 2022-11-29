/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ["ar", "en"],
		defaultLocale: "en",
	},
};

module.exports = nextConfig;
