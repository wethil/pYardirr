import Yells from './yells.js'

Meteor.methods({ 
    addYell: function(yell,lat,long) { 
        Yells.insert({
            content : yell,
            loc: {
                type: "Point",
                coordinates : [lat,long]              
            },        
            createdAt : new Date
        }) 
    } 
});