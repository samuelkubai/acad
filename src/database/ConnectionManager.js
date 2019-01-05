import env from '../config/environment';
import Sequelize from 'sequelize';
import debug from "debug";
import {createNamespace} from "cls-hooked";

const logger = debug('app:connection-manager');
const error = debug('app:error');

export default class ConnectionManager {
  constructor() {
    let connections = {
      default: `${env.POSTGRES_DIALECT}://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@${env.POSTGRES_HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_DATABASE}`,
      gitbase: `${env.GITBASE_DIALECT}://${env.GITBASE_USER}@${env.GITBASE_HOST}:${env.GITBASE_PORT}`
    };

    this.liveConnections = {};

    const namespace = createNamespace('sequelize-transaction');
    Sequelize.useCLS(namespace);

    // Create connections
    for (let name in connections) {
      this.liveConnections[name] = new Sequelize(connections[name], {
        "connectionTimeout": 0,
        "pool":{
          "max": 1000,
          "min": 1,
          "idle": 200000,
          "acquire": 200000
        },
        "retry":{ "max": 3 },
        "logging": false,
      });

      this.liveConnections[name]
        .authenticate()
        .then(() => {
          logger(`Connection ${name}, successfully established`);
        })
        .catch(() => {
          error(`Failed to establish the ${name} connection`);
        });
    }
  }
}
