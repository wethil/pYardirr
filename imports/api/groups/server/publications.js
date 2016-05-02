import { Meteor } from 'meteor/meteor';
import '../groups.js'
import Api from '../../rest.js'
Meteor.publish("groups", function () {
  return Groups.find();
});
