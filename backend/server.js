import express from "express";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Server is running");
});

app.listen(port, () => {
	console.log("Server is running now");
});
