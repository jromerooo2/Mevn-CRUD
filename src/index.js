const express = require('express');
const morgan = require('Morgan');
const mong = require('mongoose');

const app = express();
mong.connect('mongodb://localhost/karla-seguros')
    .then(db => console.log('DB is connected'))
    .catch(err=> console.error(err))

//Settings
app.set('port', process.env.PORT || 27017);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Static files
app.use(express.static(__dirname + "/public"));

//ROUTES
app.use('/login',require('./routes/login.js'));


//Starting server
app.listen(app.get('port'), () => {
    console.log('Server on jUan', app.get('port'));
});
