import ActSchema from '../ColCommons/ActsSchema.js'
import LocationSchema from '../ColCommons/LocationSchema.js'

Yells = new Mongo.Collection('yells'); 

Yells.attachSchema(
    new SimpleSchema({
    loc: {
      type: LocationSchema,
      optional: true
    },
    mYell: {
      type: String,
      defaultValue : "I am boored"
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
    belongedGroup : {
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



/**
 * "properties": {
    "location": {
      "type": "geopoint",
      "required": true
    },
    "myell": {
      "type": "string",
      "required": true,
      "default": "i am booring"
    },
    "owner": {
      "type": "string",
      "required": true
    },
    "date": {
      "type": "date",
      "required": true
    },
    "likes": {
      "type": [
        "string"
      ]
    }
  },
 * 
 */

Yells.allow({ 
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

export default Yells;