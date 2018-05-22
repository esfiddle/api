/**
 * application main router
 */
import * as express from 'express';

import {default as userRouter} from './user';

const api = express.Router();

api.use('/user', userRouter);

export default api;