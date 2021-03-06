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
    addBasicYell:function(lat,lng,plan,desc,owner){
        Yells.insert({
            plan : plan,
            desc :desc,
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
    subThisUser: function () {

        // You have access to Meteor.users here.
        // This assumes that mere existence of a user with the same username will
        // render the entered username invalid. If there are more checks you want to
        // make, they should be made here.
        return Meteor.users.find();
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
