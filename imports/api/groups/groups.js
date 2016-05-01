import ActSchema from '../ColCommons/ActsSchema.js'
import LocationSchema from '../ColCommons/LocationSchema.js'


Groups = new Mongo.Collection('groups'); 


Groups.attachSchema(
    new SimpleSchema({
    loc: {
      type: LocationSchema,
      optional: true
    },
    gName: {
      type: String,
      defaultValue : "We are boored"
    },
    createdAt: {
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
    grContent : {
        type : String,
        optional: true
    },
    owner : {
         type : String,
    },
     owner_username: {
         type : String,
    },
    
  })
);


Groups.allow({ 
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

export default Groups;