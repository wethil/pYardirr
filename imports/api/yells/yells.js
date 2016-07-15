
import LocationSchema from '../ColCommons/LocationSchema.js'

Yells = new Mongo.Collection('yells' ,{
                transform : function(doc) {
                  doc.owner = Meteor.users.findOne({
                    _id:doc.ownerId
                  },{fields: {
                              'services':0 ,
                              'createdAt':0 ,
                               'emails' :0
                         }});
                  return doc
                }
              });






Yells.attachSchema(
    new SimpleSchema({
    loc: {
      type: LocationSchema,
     optional: true
    },
    plan: {
      type: String,
      defaultValue : "I am boored"
    },
    desc :{
      type : String,
      optional : true
    },
    place : {
      type:String,
      optional:true
    },
     date : {
        type : Date,
        defaultValue:new Date()
    },
    time : {
      type : String,
      optional:true
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
    ownerId : {
         type : String,
         defaultValue : "yellfi"
    },
     paws:{
        type: [String],
        optional:true
    },
    original_yell_id:{
      type:String,
      optional:true
    },
    requested : {
      type: [String],
      defaultValue:[]
    },
    approved : {
      type:[String],
      defaultValue:[]
    },
    visible :{
      type:Number,
      defaultValue:1
    }

  })
);



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
