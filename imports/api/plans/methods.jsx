import { Meteor } from 'meteor/meteor';
import Plans from './plans.js'

Meteor.methods({ 
   addPlan: function(plan,label,hint,pCon,tCon,lang,country,extra,addedBy) { 
    Plans.insert({
            content : plan,
            label:label,
           	hint:hint,
           	needExtra :extra,
           	placeConnective :pCon,
           	timeConnective : tCon,
           	country:country,
           	languange : lang,
           	addedBy : addedBy,       
            createdAt : new Date(),

        })
        
    },
    incUsageCount : function (planId) {
    	Plans.update({_id:planId},{$inc:{usageCount:1}})
    }
    
});
