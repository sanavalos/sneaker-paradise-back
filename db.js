require("dotenv").config();
const {MONGODB_CONNECT_URI} = process.env
const mongoose = require("mongoose");

mongoose.connect(MONGODB_CONNECT_URI, {
	useNewUrlParser: true,
	dbName: "sneakers",
});

mongoose.connection
	.once("open", () => {
		console.log("\n", "Connected to db", "\n");
	})
	.on("error", (error) => {
		console.log("\n", "Error in connect db:", error, "\n");
	});

module.exports = module.exports = {
	...mongoose.models,
};
