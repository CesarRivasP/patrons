const express = require('express');
const parser = require('body-parser');
const services = require('./services');
const handlify = require('./handlers');

const usersHandler = handlify('users');
const postHandler = handlify('posts');
const app = express();

//para que pueda interpretar los formularios que vengan por la cabecera de x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }));
// en caso de que no vengan en el anterior formato, si no que se envie en las cabeceras application-json
// utilizara este middleware, parse application/json
app.use(parser.json());

const port = 3000;

app.get('/', usersHandler(services).get);
app.post('/', usersHandler(services).post);
app.put('/:id', usersHandler(services).put);
app.delete('/:id', usersHandler(services).delete);
// tambien se esta aplicando el patron de composicion
app.get('/posts', postHandler(services).get);
app.post('/posts', postHandler(services).post);
app.put('/posts/:id', postHandler(services).put);
app.delete('/posts/:id', postHandler(services).delete);

app.listen(port, () => console.log(`Example run in port ${port}`));

// esta practica lleva el patron de inyeccion de dependencias, el patron singleton, y por ultimo, el patron adaptador
// para que no pueda interpretar los json que se estan enviando a traves del cuerpo del mensaje se usa body parser