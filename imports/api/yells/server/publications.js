import { Meteor } from 'meteor/meteor';
import '../yells.js'
import Api from '../../rest.js'

Meteor.publish("ThisUser", function (userId) {
  return Meteor.users.find({'_id':userId},{fields: {
        'username':1,
        'profile.firstName':1,
        'profile.lastName':1,
       'profile.profile_pic':1
     }});
});





Meteor.publish("thisUserPaws", function(user_id) {
  return Yells.find({'acts.type':'paw','acts.id':user_id});
})

Meteor.publish("thisYell", function(yellId) {
  return Yells.find({_id:yellId});
})


Meteor.publishComposite('yells', function() {
    return {
        find: function() {
            // Find comments for this yell. Note arguments for callback function
            // being used in query.
            return Yells.find()
            
        },
        children: [
           {
             find: function(yell) {
              return Meteor.users.find({ _id: yell.ownerId });
            }
           }
        ]
    }
});

