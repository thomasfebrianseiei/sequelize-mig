const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./db/routes/admin/index");
const blogRouter = require("./db/routes/blog/index");

const PORT = process.env.PORT || 7777;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("hello peasant, from sequelize migrain"));
app.use("/admin", adminRouter);
app.use("/blog", blogRouter);

app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
