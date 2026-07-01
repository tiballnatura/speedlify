module.exports = {
	name: "allnatura.de", // optional, falls back to object key
	description: "Testing allnatura.de",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
		freshChrome: "site"
	},
	urls: [
		"https://www.allnatura.de/"
	]
};