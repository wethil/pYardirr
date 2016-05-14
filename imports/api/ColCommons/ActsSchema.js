export default ActSchema = new SimpleSchema({
    "type":{
        type: String,
        allowedValues: ["Paws", "Like"]
    },
    "acts":{
        type: Array
    },
    "acts.$":{
        type: Object
    },
    "acts.$.id":{
        type: String
    },
     "acts.$.username":{
        type: String

    },
      "acts.$.name":{
        type: String
    }
});