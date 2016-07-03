
export default PrevLocSchema = new SimpleSchema({

    "previous_locs" :{
        type : [Object]
    },


    "previous_locs.$.loc":{
        type: Object,
    },

    "previous_locs.$.loc.prev_owner": {
        type: String,
        
    },
     "previous_locs.$.loc.prev_yell": {
        type: String,     
    }


});
