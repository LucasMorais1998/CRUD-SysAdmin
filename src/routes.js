import { Router } from 'express';
import TesteController from './controllers/TesteController';
import UsersController from './controllers/UsersController';

const routes = new Router();

// route test
routes.get('/hello', TesteController.index);

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users/', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

export default routes;