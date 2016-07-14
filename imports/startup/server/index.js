import '../both.js';
import  '../../api/yells/server/publications.js'
import  '../../api/plans/server/publications.js'
import  '../../api/groups/server/publications.js'
import  '../../api/comments/server/publications.js'
import '../../api/users/UserRest.js'


Api= new Restivus({
  useDefaultAuth : true,
  prettyJSon:true
})


Meteor.publish('currentUser', function(user_id){
	return Meteor.users.find({_id:user_id})
})

Meteor.startup(function() {
//for index

Yells._ensureIndex({'loc':'2dsphere'});  
});
