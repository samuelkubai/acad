import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import ConnectionManager from "../ConnectionManager";

const db = {};
const connectionManager = new ConnectionManager();

const basename = path.basename(__filename);

for (let environment in connectionManager.liveConnections){
  fs.readdirSync(`${__dirname}/${environment}`)
    .filter(
      file => file.indexOf('.') !== 0
        && file !== basename
        && file.slice(-3) === '.js',
    )
    .forEach((file) => {
      const model = connectionManager.liveConnections[environment].import(path.join(`${__dirname}/${environment}`, file));
      db[model.name] = model;
    });
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.connections = connectionManager.liveConnections;
db.Sequelize = Sequelize;

// DO NOT CHANGE EVER!!!
module.exports = db;
