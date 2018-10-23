const path = require ('path');
const express = require('express');
const morgan = require('morgan');
const remote_json = require('remote-json')
const mongoose = require('mongoose');

const app = express();

//test riot remote-json

//conexion a db
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('db connected'))
.catch(err => console.log(err));
// importando rutas
const indexRoutes = require('./routes/index');

// configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
//middlewares *funciones que se ejecuta antes de llegar a las rutas. procesar datos antes de que lleguen
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//routes
app.use('/',indexRoutes);
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css/fonts/Helveticas/', express.static(__dirname + '/fonts/Helveticas/'));
//iniciando servidor

app.listen(app.get('port'), ()=>{
  console.log(`Server on port ${app.get('port')}`);
});
