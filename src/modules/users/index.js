import express from 'express';
import UsersController from './UsersController';
import middlewares from '../../middlewares';

const { authenticate } = middlewares;
const Router = express.Router();

Router.get('/users', authenticate, UsersController.getUsers);

export default Router;
