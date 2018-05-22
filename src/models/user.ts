import {Schema, Model, Document, model} from 'mongoose';
import * as bcrypt from 'bcryptjs';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

export interface IUserModel {
    createUser(user: IUser, callback: Function): void
    comparePassword(candidatePassword: string, hash: string, callback: Function): void
    findByEmail(email: string, callback: Function): void
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        "default": Date.now()
    },
    updatedAt: {
        type: Date,
        "default": Date.now()
    }
});

userSchema.static('createUser', (user: IUser, callback: Function) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) throw err;
            user.password = hash;
            user.save(callback);
        });
    });
});

userSchema.static('comparePassword', (candidatePassword: string, hash: string, callback: Function) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
});

userSchema.static('findByEmail', (email: string, callback: Function) => {
    User.findOne({email: email}, callback);
});

export type UserModel = Model<IUser> & IUserModel & IUser;

export const User: UserModel = <UserModel>model<IUser>("User", userSchema);