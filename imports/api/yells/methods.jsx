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
            created_at : new Date
        }) 
    } 
});