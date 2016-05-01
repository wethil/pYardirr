Yells = new Mongo.Collection('yells'); 
LocationSchema = new SimpleSchema({
    "type":{
        type: String,
        allowedValues: ["Point"]
    },
    "coordinates":{
        type: Array,
        minCount: 2,
        maxCount: 2
    },
    "coordinates.$":{
        type: Number,
        decimal: true,
        custom: function(){
            if(!(-90 <= this.value[0] <= 90))
                return "lonOutOfRange" ;
            if(!(-180 <= this.value[1] <= 180))
                return "latOutOfRange" ;
        }

    },
    "name": {
        type: String,
        optional: true
    },
});



ActSchema = new SimpleSchema({
    "type":{
        type: String,
        allowedValues: ["Paws", "Like"]
    },
    "acts":{
        type: Array,
    },
    "acts.$":{
        type: Object,
    },
    "acts.$.id":{
        type: String,
    },
     "acts.$.username":{
        type: String,
    },
      "acts.$.name":{
        type: String,
    }
});




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



LocationSchema.messages = {
  lonOutOfRange: 'Longitude out of range', // Must be between -90 and 90
  latOutOfRange: 'Latitude out of range' // Must be between -180 and 180
}


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