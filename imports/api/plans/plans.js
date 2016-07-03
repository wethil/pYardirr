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
         type : String
    },
    timeConnective: {
        type : String
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