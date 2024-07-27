import express, { static } from "express";
import { join } from "path";
import logger from "morgan";
import { urlencoded } from "body-parser";
import expressHandlebars from "express-handlebars";

import index from "./routes/index";

const app = express();

app.engine("handlebars", expressHandlebars({ defaultLayout: "app" }));
app.set("views", join(__dirname, "views"));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(urlencoded({ extended: false }));

app.use("/", index);
app.use(static(join(__dirname, "public")));

export default app;
