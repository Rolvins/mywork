import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Users = new Mongo.Collection('Users');
export const Log = new Mongo.Collection('Log');
export const Qbank = new Mongo.Collection('Qbank');
export const Seed = new Mongo.Collection('Seed');
export const Uact = new Mongo.Collection('Uact');
export const Exam = new Mongo.Collection('Exam');

if(Meteor.isServer){
  Meteor.publish('Users', () => {
    return Users.find({userId: this.userId});
  }
);
}
Meteor.methods({
  'EditProfile.Insert'(UserFullName){
    if(!this.userId){
      throw new Meteor.Error('You are not an authorized user. Please Login again to update it.');
    }
    Users.insert({
      UserFullName,
      userId: this.userId,
    });
  }
});
