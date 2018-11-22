import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const IdentitiesSchema = new Schema({

});

export const UserSchema = new Schema({
      _id:  {
        required: true,
        type: String,
      },
      email: {
        required: true,
        trim: true, unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        type: String,
      },
      biography: {
        required: false,
        type: String,
      },
      githubProvider: {
        type: {
          id: String,
          token: String,
        },
        select: false,
      },
});

UserSchema.statics.upsertGithubUser = function(token: string, tokenSecret: string, profile: any, cb: any) {
  const that = this;
  return this.findOne({
    "githubProvider.id": profile.id,
  }, function(err: any, user: any) {
    if (!user) {
      const newUser = new that({
        email: profile.emails[0].value,
        githubProvider: {
          id: profile.id,
          token,
          tokenSecret,
        },
      });

      newUser.save((error: any, savedUser: any) => {
        if (error) { console.log(error); }
        return cb(error, savedUser);
      });
    } else {
      return cb(err, user);
    }
  });
};