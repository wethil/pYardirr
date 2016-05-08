import { Meteor } from 'meteor/meteor';
import Yells from '../../yells/yells.js'
import Comments from  '../comments.js'
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


Meteor.publish("comments", function () {
  return Comments.find();
});
