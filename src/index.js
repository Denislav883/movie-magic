import routes from "./routes.js";
import authMiddleware from "./middlewares/authMiddleware.js";

import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

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
    extname: "hbs",
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
}));

app.set("view engine", "hbs");
app.set("views", "src/views");

// Setup static middleware
app.use(express.static('src/public'));

// Parse form data from req
app.use(express.urlencoded());

// Cookie Parser
app.use(cookieParser());

// Use auth middleware
app.use(authMiddleware);

// Routes
app.use(routes);

// Start server
app.listen(5000, console.log("Server is listening on http://localhost:5000..."));