import Yells from './yells.js'

Meteor.methods({ 
    addYell: function(yell,lat,long,username,name,id) { 
        Yells.insert({
            mYell : yell,
            loc: {
                type: "Point",
                coordinates : [lat,long]              
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