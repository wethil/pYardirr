
import LocationSchema from '../ColCommons/LocationSchema.js'

Comments = new Mongo.Collection('comments' ,{
                transform : function(doc) {
                  doc.owner = Meteor.users.findOne({
                    _id:doc.ownerId
                  },{fields: {
                              'services':0 , 
                              'createdAt':0 ,
                               'profile.paws':0,
                               'emails' :0
                         }});
                  return doc
                }
              });  

Comments.attachSchema(
    new SimpleSchema({
    yell_id: {
      type: String,
      optional: false
    },
    content: {
      type: String,
      defaultValue : "I am boored"
    },
    created_at: {
      type: Date,
      denyUpdate: true
    },
    rating : {
        type : Number,
        defaultValue : 0
    },
    ownerId : {
         type : String,
         defaultValue : "yellfi"
    },
     loc: {
      type: LocationSchema,
      optional: true
    }
    
  })
);





Comments.allow({ 
    insert: function() { 
        return true; 
    }, 
    update: function() { 
        return true; 
    }, 
    remove: function() { 
        return true; 
    } 
});


export default Comments