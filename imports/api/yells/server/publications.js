import { Meteor } from 'meteor/meteor';
import  '../yells.js'
import Api from '../../rest.js'
Meteor.publish("yells", function(){
  return  Yells.find(); 
});


Api.addRoute('yells/new', {authRequired: false}, {
  get: {
    authRequired: false,
    action: function () {
      // GET api/yells
    }
  },
  post: function () {
    // POST api/yells
    console.log(this.request);
    var mYell = this.bodyParams.mYell;
    var location = this.bodyParams.loc;
    var createdAt = this.bodyParams.createdAt;
    var data = {
      mYell : mYell,
      loc : location,
      createdAt : createdAt
    }
   
    Yells.insert(data);
    return "oki doki"
  },
  put: function () {
    // PUT api/yells
  },
  patch: function () {
    // PATCH api/yells
  },
  delete: function () {
    // DELETE api/yells
  },
  options: function () {
    // OPTIONS api/yells
  }
});
