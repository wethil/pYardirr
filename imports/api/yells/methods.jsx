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
    pawYell : function (yell,user_id) {
    
     Meteor.users.update({ _id:user_id },{ $push: { 'profile.paws': yell }})
     Yells.update({_id:yell}, {$push : {paws : user_id }})
      
 } 
})

Meteor.methods({
   unPawYell : function (yell,user_id) {
  
    
     Meteor.users.update({ _id:user_id },{ $pull: { 'profile.paws': yell }})

         Yells.update({_id:yell}, {$pull : {paws : user_id }})

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
    PawUnRateYell : function (id) {
        Yells.update({_id:id},{$inc:{ rating:-1 }})

    } 
})

Meteor.methods({
    LikeRateYell : function (id) {
        Yells.update({_id:id},{$inc:{ rating:1 }})

    } 
})
