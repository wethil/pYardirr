import ActSchema from '../ColCommons/ActsSchema.js'
import LocationSchema from '../ColCommons/LocationSchema.js'

Yells = new Mongo.Collection('yells'); 






Yells.attachSchema(
    new SimpleSchema({
    loc: {
      type: LocationSchema,
      optional: true
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
    comment_quantity : {
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
    like_quantity : {
        type : Number,
        defaultValue : 0
    },
     
     "acts.$.id":{
        type: String
    },
    "acts.$.genre":{
        type: String
    },
     "acts.$.username":{
        type: String
    },
      "acts.$.name":{
        type: String
    }
    
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