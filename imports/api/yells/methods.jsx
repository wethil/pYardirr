import { Meteor } from 'meteor/meteor';
import Yells from './yells.js'


Meteor.methods({ 
    addYell: function(yell,long,lat) { 
        Yells.insert({
            mYell : yell,
            loc: {
                type: "Point",
                coordinates : [long,lat]              
            },        
            createdAt : new Date
        }) 
    } 
});