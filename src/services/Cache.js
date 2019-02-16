import Redis from 'redis';
import Env from '../config/environment';
import debug from "debug";
import { promisify } from 'util';

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

  async get(key) {
    // Check if this query was cached before
    logger(`Cache: Checking for cached record: ${key}`);
    const cacheValue = await this.client.get(key);

    // Return the value cached if cache exists
    if (cacheValue) {
      logger(`Cache: Found a cache record for: ${key}`);
      return JSON.parse(cacheValue);
    }

    logger(`Cache: No cache record found for: ${key}`);
    return cacheValue;
  }

  async set(key, value) {
    // Cache the query results
    logger(`Cache: Caching a new record for: ${key}`);
    await this.client.set(key, JSON.stringify(value), 'EX', 1800);

    return true;
  }
}
