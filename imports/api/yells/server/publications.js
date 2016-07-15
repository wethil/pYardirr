import { Meteor } from 'meteor/meteor';
import '../yells.js'
import Api from '../../rest.js'





Meteor.publish("ThisUser", function (userId) {
  return Meteor.users.find({'_id':userId},{fields: {
        'username':1,
       'profile.profile_pic':1
     }});
});

Meteor.publish("yells",function(queryType,locationParameter){
  switch (queryType) {
    case 0:
          return Yells.find()
          console.log('recent worked');
          console.log(yells);
      break;
    case 1:
          return Yells.find({
                "loc": {
                  $near: {
                    $geometry:
                       {
                      type: "Point",
                      coordinates: locationParameter
                        },
                  }
                }
              }
            )
            console.log('nearby worked');
            console.log(yells);
        break;
    default:
         return  Yells.find()
  }

})





Meteor.publish("thisUserPaws", function(user_id) {
  return Yells.find({'acts.type':'paw','acts.id':user_id});
})

Meteor.publish("thisYell", function(yellId) {
  return Yells.find({_id:yellId});
})
