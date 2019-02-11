import analyticsRouter from './analytics';
import teamsRouter from './teams';
import healthCheckRouter from './healthCheck';
import usersRouter from './users';
import velocityRouter from './velocity';


const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, analyticsRouter);
  app.use(apiPrefix, teamsRouter);
  app.use(apiPrefix, healthCheckRouter);
  app.use(apiPrefix, usersRouter);
  app.use(apiPrefix, velocityRouter);

  return app;
};

export default routes;
