import express from 'express';
import path from 'path'
import cors from 'cors'
import 'express-async-errors'

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler)

// Rota = conjunto
// Recurso = usuário
// Métodos HTTP = GET, POST, PUT, DELETE
// Parametros

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=guilherme
// Route Params: http://localhost:3333/users/1 (Idendificar um recurso) | (Identificar usuário com id 1)
// Body: http://localhost:3333/users (Idendificar um recurso)



app.listen(3333);



// REQ / RES -> Request / Response -> Requisição / Resposta
// localhost:3333 

// Driver nativo, Query builder, ORM (Object Relational Mapping)

// knex('users').select('*').where('name', 'Guilherme') -> Query Builder

// SELECT * FROM USERS where NAME... -> Driver Nativo

// users
// User

// 3 users
// User User User