import Groups from './groups.js'

Meteor.methods({ 
    addGroup: function(gName,long,lat) { 
        Groups.insert({
            gName : gName,
            loc: {
                type: "Point",
                coordinates : [long,lat]              
            },        
            createdAt : new Date
        }) 
    } 
});