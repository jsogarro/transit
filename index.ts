/**
 * Server
 */
import * as dotenv from 'dotenv';
import server from './src/server';

/** Server shutdown cleanup. */
process.stdin.resume();

const exitHandler = (options, exitCode) => {
  if (options.cleanup) console.log('clean');
  if (exitCode || exitCode === 0) console.log(exitCode);
  if (options.exit) process.exit();
}

process.on('exit', exitHandler.bind(null, { cleanup: true }));
process.on('SIGINT', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));
process.on('uncaughtException', exitHandler.bind(null, { exit: true }));

/** load environments */
dotenv.config();

/** set options */
const port = process.env.NODE_ENVIRONMENT === 'production' ? process.env.PROD_GRAPHQL_PORT : process.env.DEV_GRAPHQL_PORT;
const options = { port };

/** Start the server */
server.start(options, () => console.log(`Server is running on localhost: ${options.port}`));
