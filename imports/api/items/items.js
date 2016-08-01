Items = new Mongo.Collection('items' ,{
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



Items.attachSchema(
    new SimpleSchema({
    loc: {
      type: LocationSchema,
     optional: true
    },
    itemType: {
      type: String,
      defaultValue : "Milkshake"
    },
    itemDesc :{
      type : String,
      optional : true
    },
    itemTags : {
      type:[String],
      optional:true
    },
    
    itemPhoto:{
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
    ownerId : {
         type : String,
         defaultValue : "yellfi"
    },
	created_at: {
      type: Date,
      denyUpdate: true
    },
    quantity : {
        type : Number,
        defaultValue : 1
    },
    comment_quantity : {
       type : Number,
        defaultValue : 0
    }
  })
);



Items.allow({
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

export default Items;
