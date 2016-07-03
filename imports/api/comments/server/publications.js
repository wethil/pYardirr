import { Meteor } from 'meteor/meteor';
import Yells from '../../yells/yells.js'
import Comments from  '../comments.js'
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

//built-in pub
/**Meteor.publish("comments", function () {
  return Comments.find();
}); */


// Server
Meteor.publishComposite('comments.inYell', function(yell_id) {
    return {
        find: function() {
            // Find comments for this yell. Note arguments for callback function
            // being used in query.
            return Yells.find({_id:yell_id})
            
        },
        children: [
           {
             find: function() {
              return Comments.find({ yell_id: yell_id });
            }
           }
        ]
    }
});



Meteor.publishComposite('thisYellComments', function(yell_id) {
    return {
        find: function() {
            // Find comments for this yell. Note arguments for callback function
            // being used in query.
            return Comments.find({yell_id:yell_id})
            
        },
        children: [
           {
             find: function(comment) {
              return  Meteor.users.find({_id: comment.ownerId},{fields: {
                                    'services':0 , 'createdAt':0
                                 }});
            }
           }
        ]
    }
});


