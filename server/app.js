const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const { fetchHeroData } = require('./services/fetch_data');

const key = process.env.OPENDOTA_KEY

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/item', (request, response) => {
    fetchHeroData(request, response);
});

app.listen(port, () => {
    console.log(`Tutorial app listening on port ${port}`);
});
