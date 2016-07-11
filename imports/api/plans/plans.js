Plans = new Mongo.Collection('plans')

Plans.attachSchema(
    new SimpleSchema({
    content: {
      type: String
    },
    label: {
      type: String
    },
    hint : {
        type : String

    },
    needExtra : {
       type : Boolean

    },
    placeConnective : {
         type : String,
         optional:true
    },
    timeConnective: {
        type : String,
        optional:true
    },

     country:{
        type: String
    },
    languange:{
      type:String
    },
    addedBy : {
     	type:String
    },
    createdAt:{
    	type: Date,
    	denyUpdate: true

    },
    usageCount :{
    	type: Number,
    	defaultValue:0
    }
  })
);


Plans.allow({
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

export default Plans;
