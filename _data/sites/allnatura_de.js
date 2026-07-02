module.exports = {
	name: "allnatura.de", // optional, falls back to object key
	description: "Testing allnatura.de",
	skip: false,
	options: {
		runs: 3,
		frequency: 1, // (in minutes)
		freshChrome: "site"
	},
	urls: [
		"https://www.allnatura.de/",
		"https://www.allnatura.de/schlafen/matratzen/naturlatex-matratzen",
		"https://www.allnatura.de/p/naturlatex-matratze-supra-comfort-89",
		"https://www.allnatura.de/ratgeber",
	]
};