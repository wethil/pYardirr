import { Meteor } from 'meteor/meteor';
import '../items.js'


Meteor.publish("items",function(){
	return Items.find()
})