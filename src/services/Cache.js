import Redis from 'redis';
import Env from '../config/environment';
import debug from "debug";
import { promisify } from 'util';
import Models from "../database/models";

const logger = debug("app:services");
const error = debug("app:error");

export default class Cache {
  constructor() {
    this.client = Redis.createClient(Env.REDIS_URL);

    this.client.on('error', () => {
      error(`Cache: Failed to connect to the redis server`);
    });
    this.client.on('connect', () => {
      logger(`Cache: Successfully connected to the redis server on: ${Env.REDIS_URL}`);
    });
    this.client.on('reconnecting', () => {
      logger(`Cache: Reconnecting to the redis server on: ${Env.REDIS_URL}`);
    });
    this.client.on('end', () => {
      logger(`Cache: Connection to the redis server on: ${Env.REDIS_URL} terminated`);
    });

    this.client.get = promisify(this.client.get);
    this.client.set = promisify(this.client.set);
  }

  async queryProxy(query, options) {
    const key = JSON.stringify(query);

    // Check if this query was cached before
    const cacheValue = await this.client.get(key);

    // Return the value cached if cache exists
    if (cacheValue) {
      return JSON.parse(cacheValue);
    }

    // Query the database if cache does not exist
    const result = await Models.connections.gitbase.query(query, options);

    // Cache the query results
    await this.client.set(key, JSON.stringify(result));

    // Return the results
    return result;
  }
}
