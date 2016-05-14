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
    actYell : function (id) {
       
            var paw = 
                { 
                "id" : 'exid', 
                 "genre" : 'Paw', 
                "username" : 'exuser',
                 "name" : 'exname'
                   }
            
        
        Yells.update({_id:id}, {$push : {acts : paw }})

    } 
})

Meteor.methods({
    likeYell : function (id) {
        Yells.update({_id:id},{$inc:{ rating:1 }})
    } 
})

Meteor.methods({
    pawRateYell : function (id) {
        Yells.update({_id:id},{$inc:{ rating:1 }})

    } 
})
