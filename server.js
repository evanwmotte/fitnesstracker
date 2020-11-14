const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ silent: true });

const PORT = process.env.PORT || 8080

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app)

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useFindandModify: false
}, () => {
    console.log("Mongoose is connected")
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});