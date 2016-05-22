import ActSchema from '../ColCommons/ActsSchema.js'
import LocationSchema from '../ColCommons/LocationSchema.js'

export default Comments = new Mongo.Collection('comments'); 

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
    act : {
      type : ActSchema,
      optional: true
    },
    rating : {
        type : Number,
        defaultValue : 0
    },
    owner : {
         type : String,
         defaultValue : "yellfi"
    },
     owner_username: {
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
