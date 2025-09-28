import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";

import routes from "./router.js";

export const app = express();

//Setup Database
try {
    const url = "mongodb://localhost:27017";
    await mongoose.connect(url, {
        dbName: "movie-magic"
    });

    console.log("Successfully connected to DB!")
} catch(err) {
    console.log("Cannot connect to DB, ", err.message);
}

//Setup Handlebars
app.engine("hbs", handlebars.engine({
    extname: "hbs"
}));

app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static('src/public'));
app.use(express.urlencoded());

app.use(routes);

app.listen(5000, console.log("Server is listening on http://localhost:5000..."));