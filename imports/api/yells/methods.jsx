import { Meteor } from 'meteor/meteor';
import Yells from './yells.js'


Meteor.methods({ 
   addYell: function(lat,lng,plan,desc,date,time,place,owner) { 
    Yells.insert({
            plan : plan,
            desc :desc,
            place :place,
            date : date,
            time : time,
            ownerId:owner,
            loc: {
                type: "Point",
                coordinates : [lat,lng]              
            },        
            created_at : new Date()
        })
        
    },
    reqJoin:function(userId,yell) {
        Yells.update({_id:yell}, {$push : {requested : userId }})
    },
    cancelJoin: function(userId,yell) {
         Yells.update({_id:yell}, {$pull : {requested : userId }})
    },
    approveJoin:function(userId,yell) {
        Yells.update({_id:yell}, {$push : {approved : userId }})
    },
    cancelApprove:function(userId,yell) {
        Yells.update({_id:yell}, {$pull : {approved : userId }})
    }
    
});









Meteor.methods({ 
    SpreadYell: function(user_id,yell_content,loc,origin_yell_id) { 
   Yells.insert({
            content : yell_content,
            ownerId:user_id,
            original_yell_id:origin_yell_id,
            loc: loc,    
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
