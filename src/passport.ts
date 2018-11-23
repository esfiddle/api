import * as passport from "passport";
import * as GithubTokenStrategy from "passport-github-token";

const User = require("mongoose").model("User");

import * as dotenv from "dotenv";
dotenv.config();

module.exports = () => {
    passport.use(new GithubTokenStrategy({
        clientID: process.env.GITHUB_CLIENT_ID || "see_example_env",
        clientSecret: process.env.GITHUB_CLIENT_SECRET || "see_example_env",
        passReqToCallback: true,
    }, (req: any, accessToken: string, refreshToken: string, profile: any, next: any) => {
        User.upsertGithubUser(token, refreshToken, profile, (err, user) => done(err, user));
    }));
};
