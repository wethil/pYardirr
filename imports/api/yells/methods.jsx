import { Meteor } from 'meteor/meteor';
import Yells from './yells.js'


Meteor.methods({ 
    addYell: function(yell,lat,long,user) { 
        Yells.insert({
            content : yell,
            owner:user,
            loc: {
                type: "Point",
                coordinates : [lat,long]              
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
    actYell : function (id,user_id,genre,username,name) {
       
            var act = 
                { 
                "id" : user_id, 
                 "genre" : genre, 
                "username" : username,
                 "name" : name
                   }
            
        
        Yells.update({_id:id}, {$push : {acts : act }})

    } 
})

Meteor.methods({
    likeYell : function (id) {
        Yells.update({_id:id},{$inc:{ rating:1 }})
    } 
})

Meteor.methods({
    PawRateYell : function (id) {
        Yells.update({_id:id},{$inc:{ rating:1 }})

    } 
})

Meteor.methods({
    LikeRateYell : function (id) {
        Yells.update({_id:id},{$inc:{ rating:1 }})

    } 
})
