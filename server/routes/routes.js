const ObjectID = require('mongodb').ObjectID;
const fileToDB = require('./fileRead');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
module.exports = function(app, db) {
    /////////////////////////////////FIND
    app.post('/find',(req,res)=>{
        let find = req.body;
        if(find.Stars)
        {
            const arrayStars = find.Stars.split(', ');
            find = { Stars: { $all : arrayStars } };
            console.log(find);
        }
        db.find(find).toArray((err, result)  => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });
    /////////////////////////////////SORT
    app.get('/sort',(req,res)=>{
        db.find({}).sort({Title: 1, ReleaseYear: 1}).toArray((err, result)  => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });
    /////////////////////////////////GET
    app.get('/get',(req,res)=>{
        db.find({}).toArray((err, result)  => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(result);
            }
        });
    });
    /////////////////////////////////CREATE
    app.post('/create',(req,res) =>{
        console.log("___________");
        console.log(req.body);
        const data = req.body;
        const arrayStars = data.Stars.split(',');
        const newFilm = [{ Title: data.Title, ReleaseYear: data.ReleaseYear, Format: data.Format, Stars: arrayStars}];
        db.insertOne(newFilm, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.post('/withFile',(req,res) =>{
        let file;
        for (let value in req.body){file = value}
        const data = fileToDB(file);
        console.log(data);
        db.insertMany(data, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops);
            }
        });
    });
    /////////////////////////////////DELETE
    app.delete('/delete/:id',(req,res) =>{
        let id = new ObjectID(req.params.id);
        const details = { '_id': id };
        db.deleteOne(details, (err) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });
};