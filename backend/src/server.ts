import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

//Rota = conjunto
//Recurso = usuário
//Métodos HTTP = GET, POST, PUT, DELETE
//Parâmetros

//GET = Buscar uma informação (lista, item)
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

//Query Params: http://localhost:3333/users?search=allan
//Route Params: http://localhost:3333/users/1 (idenficar um recurso)
//Body: http://localhost:3333/users (as informações vêm no corpo da requisição)

//Driver nativo, query builder, ORM

//Driver nativo = usa selects normais de banco de dados (SELECT * FROM ...)
//Query builder = por exemplo o knex: knex('users').select('*').where('name'), 'Allan')
//ORM = Object Relational Mapping: nível de abstração maior, classe de Javascript que cria instância de objeto para cada retorno do banco de dados

//Query builder ou ORM = pode mudar de banco de dados, ele integra sem precisar mudar nada na aplicação, ele integra com outros bancos de dados SQL

app.listen(3333);