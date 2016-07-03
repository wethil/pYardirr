
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
         defaultValue : "yellfi"
    },
     owner_username: {
         type : String,
         defaultValue : "yellfi"
    }
    
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