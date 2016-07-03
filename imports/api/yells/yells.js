
import LocationSchema from '../ColCommons/LocationSchema.js'

Yells = new Mongo.Collection('yells' ,{
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
        type : Date
    },
    time : {
      type : String
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
      optional :true
    },
    approved : {
      type:[String],
      optional: true
    }

  })
);


/*
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
    ownerId : {
         type : String,
         defaultValue : "yellfi"
    },
    like_quantity : {
        type : Number,
        defaultValue : 0
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
      optional :true
    },
    approved : {
      type:[String],
      optional: true
    }

  })
);*/


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