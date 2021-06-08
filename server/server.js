const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(db.uri, { useNewUrlParser: true });
const cors = require('cors');
client.connect((err) => {
    if (err) return console.log(err);
    const collection = client.db("ArticleDB").collection("ArticleList");
    const route = require('./routes/index');
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    route(app, collection);
    const port = 3001;
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});
module.exports = app;