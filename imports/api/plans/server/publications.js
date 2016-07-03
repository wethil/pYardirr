import { Meteor } from 'meteor/meteor';
import Plans from '../plans.js'

Meteor.publish("plans",function() {
	return Plans.find()
})