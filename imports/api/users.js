import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Users = new Mongo.Collection('Users');
export const Log = new Mongo.Collection('Log');
export const Qbank = new Mongo.Collection('Qbank');
export const Seed = new Mongo.Collection('Seed');
export const Uact = new Mongo.Collection('Uact');
export const Exam = new Mongo.Collection('Exam');

Meteor.methods({
  'EditProfile.Insert': function(UserFullName) {
    Users.insert({
      UserFullName
    });
    console.log('UserFullName inserted', UserFullName);
  }
});
