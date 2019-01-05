import express from 'express';
import VelocityController from './VelocityController';

const Router = express.Router();

Router.get('/velocity', VelocityController.getFellowVelocityBreakdown);

export default Router;
