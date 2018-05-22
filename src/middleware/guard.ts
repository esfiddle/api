import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

/**
 * http(s) middleware guard
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 * @returns {Response}
 */
export const guard = (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers['authorization'];
        if (token) {
            jwt.verify(token, process.env.APPLICATION_SECRET, (err, user) => {
                if (err) {
                    console.error(err);
                    return res.json({
                        success: false,
                        message: 'Failed to authenticate token.'
                    });
                } else {
                    req.body.user = user._doc;
                    next();
                }
            });
        } else {
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        }
};