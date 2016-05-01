import Yells from './yells.js'

Meteor.methods({ 
    addYell: function(yell,long,lat,username,name,id) { 
        Yells.insert({
            mYell : yell,
            loc: {
                type: "Point",
                coordinates : [long,lat]              
            },        
            createdAt : new Date,
            act: {
                type : "Like",
                acts  : [{
                    id : id ,
                    username : username,
                    name : name
                }]
            }
        }) 
    } 
});