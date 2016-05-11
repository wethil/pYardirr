import { Meteor } from 'meteor/meteor';
import Yells from './yells.js'


Meteor.methods({ 
    addYell: function(yell,long,lat) { 
        Yells.insert({
            content : yell,
            loc: {
                type: "Point",
                coordinates : [long,lat]              
            },        
            created_at : new Date()
        }) 
    } 
});

Meteor.methods({
    incCommentQuan : function (id) {
        Yells.update({_id:id},{$inc:{ comment_quantity:1 }})
    } 
})

Meteor.methods({
    pawYell : function (id) {
        Yells.update({_id:id},{$inc:{ rating:1 }})
    } 
})

Meteor.methods({
    likeYell : function (id) {
        Yells.update({_id:id},{$inc:{ rating:1 }})
    } 
})