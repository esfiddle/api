/**
 * user router
 */
import * as express from 'express';
import {Auth} from './Auth';

const user = express.Router();

user.use('/auth', new Auth().getRoutes());

export default user;