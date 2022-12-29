/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#F2E0D8",
				"primary-100": "#FFE5D9",
				netural: "#5F7874",
			},
		},

		container: {
			center: true,
			padding: "1.625rem",
		},

		fontFamily: {
			custom: ["Inter", "Cairo", "sans-serif"],
		},
	},
	plugins: [],
};
