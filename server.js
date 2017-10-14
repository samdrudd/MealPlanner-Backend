const express		= require('express');
const cors  		= require('cors');
const mongoose		= require('mongoose');
const bodyParser	= require('body-parser');
const db		= require('./config/db');

const app		= express();

const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

var database = mongoose.createConnection(db.url);

require('./app/routes')(app, database);

app.listen(port, () => {
	console.log('server lives');
});
