import express from 'express';
import TeamsController from './TeamsController';
import middlewares from '../../middlewares';

const { authenticate } = middlewares;
const Router = express.Router();

Router.get('/teams', authenticate, TeamsController.getTeams);
Router.post('/teams/create', authenticate, TeamsController.createTeam);

export default Router;
