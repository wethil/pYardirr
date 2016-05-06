import { Meteor } from 'meteor/meteor';
import '../comments.js'

Meteor.publish("comments", function () {
  return Comments.find();
});
