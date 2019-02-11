import express from 'express';
import TeamsController from './TeamsController';
import middlewares from '../../middlewares';

const { authenticate } = middlewares;
const Router = express.Router();

Router.get('/teams', authenticate, TeamsController.getTeams);

export default Router;
