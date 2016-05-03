import '../both.js';
import  '../../api/yells/server/publications.js'
import  '../../api/groups/server/publications.js'
Api= new Restivus({
  useDefaultAuth : true,
  prettyJSon:true
})

Meteor.startup(function() {
//for index
// Yells._ensureIndex({ "loc.coordinates": "2dsphere" })
Yells._ensureIndex({'loc.coordinates':'2dsphere'});  
});