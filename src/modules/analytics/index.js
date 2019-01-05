import express from 'express';
import AnalyticsController from './AnalyticsController';
import middlewares from '../../middlewares';

const { authenticate } = middlewares;
const Router = express.Router();

Router.get('/analytics', authenticate, AnalyticsController.getFellowAnalytics);

export default Router;
