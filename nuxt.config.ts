// import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	ssr: true,

	app: {
		// head: {
		// 	charset: "utf-8",
		// 	viewport: "width=device-width, initial-scale=1, maximum-scale=1",
		// 	link: [
		// 		{ rel: "preconnect", href: "https://fonts.googleapis.com" },
		// 		{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
		// 		{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rubik:wght@100;200;300;400;500;600;700;800;900&display=swap" },

		// 		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		// 	]
		// }
	},

	vite: {
		plugins: [
			// tailwindcss()
		]
	},

	css: [
		'~/assets/css/global.css',
	],

	nitro: {
		preset: 'bun'
	}

});