import * as jwt from 'jsonwebtoken';
import { Router, Request, Response } from 'express';

import { User } from '../../models/user';
import { BaseRoute } from '../BaseRoute';

export class Auth extends BaseRoute {

    public loginAction(router: Router): void {
        router.post('/login', (req: Request, res: Response) => {
            let email = req.body.email;

            const re = /\S+@\S+\.\S+/;
            
            if (!re.test(email)) {
                res.status(400);
                res.json({
                    success: false,
                    message: 'wrong input.'
                });
                return false;
            }

            User.findByEmail(email, (err, user) => {
                if(user) {
                    User.comparePassword(req.body.password, user.password, (err, isMatch) => {
                        if (err) {
                            this.logger.error(err.toString());
                            res.status(500);
                            res.json({
                                success: false,
                                message: 'something went wrong.'
                            });
                        } else if (isMatch) {
                            const token = jwt.sign(user, process.env.APPLICATION_SECRET, {
                                expiresIn: 604800 // 1 week
                            });

                            res.json({
                                success: true,
                                token: token,
                            });
                        } else {
                            res.status(400);
                            res.json({
                                success: false,
                                message: 'wrong credentials.'
                            });
                        }
                    });
                } else {
                    res.status(400);
                    res.json({
                        success: false,
                        message: 'wrong credentials.'
                    });
                }
            });
        });
    }

    public registerAction(router: Router): void {
        router.post('/register', (req: Request, res: Response) => {
            const re = /\S+@\S+\.\S+/;

            let name = req.body.name,
                email = req.body.email,
                password = req.body.password;

            if (!name || !re.test(email) || !password || password.length < 6) {
                res.status(400);
                res.json({
                    success: false,
                    message: 'wrong input.'
                });
                return false;
            }

            User.findByEmail(email, (err, user) => {
                if (err) {
                    this.logger.error(err.toString());
                    res.status(500);
                    res.json({
                        success: false,
                        message: 'something went wrong.'
                    });
                } else if (!user) {
                    const user = new User({
                        name : name,
                        email: email,
                        password: password,
                    });

                    User.createUser(user, (err, user)=>{
                        if (err) {
                            this.logger.error(err.toString());
                            res.status(500);
                            res.json({
                                success: false,
                                message: 'something went wrong.'
                            });
                        } else {
                            res.json({
                                success: true,
                                message: 'user created.'
                            });
                        }
                    });
                } else {
                    res.status(400);
                    res.json({
                        success: false,
                        message: 'this email address has already been taken.'
                    });
                }
            });
        });
    }

    public profileAction(router: Router): void {
        router.get('/profile', this.guard, (req: Request, res: Response) => {
            res.json({
                success: true,
                user: req.body.user
            });
        });
    }
}

