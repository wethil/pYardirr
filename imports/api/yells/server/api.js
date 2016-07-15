import { Meteor } from 'meteor/meteor';
import '../yells.js'
import Api from '../../rest.js'

Api.addRoute('yells/new', { authRequired: false }, {

  post: function () {
    // POST api/yells
    console.log(this.request);
    var content = this.bodyParams.content;
    var location = this.bodyParams.loc;
   
    var data = {
      content: content,
      loc: location,
      created_at: new Date()
    }
    
    return Yells.insert(data);
  }

});

 ///api/yell/fetch?lat=&lng=&max=
Api.addRoute('yell/fetch?lat=&lng=&max=', { authRequired: false }, {
  get: function () {
    console.log(this.request);
    var urlLat = this.queryParams.lat
    var urlLng = this.queryParams.lng
    var urlMaxDis = this.queryParams.max;
    lat = Number(urlLat)
    lng = Number(urlLng)
    maxdis = Number(urlMaxDis)
    console.log(lng + ' ' + lat);
    return  yells = Yells.find({
      "loc.coordinates": {
        $near: {
          $geometry: 
             {
            type: "Point",
            coordinates: [lat, lng]
              },
          $maxDistance: maxdis
        }
      }
    }, {sort : {created_at:-1}}).fetch()
 }
});



Api.addRoute('paws/fetch?userId=', { authRequired: false }, {
  get: function () {
    console.log(this.request);
    var user_id = this.queryParams.userId
    user_paws=Meteor.users.findOne({_id:user_id}).profile.paws
    console.log(user_paws)
    res = []  
    user_paws.forEach(function (yell_id) {
      yell=Yells.findOne({_id:yell_id})
      yell.owner_username =  Meteor.users.findOne({_id:yell.owner}).username
      yell.owner_profile_pic = Meteor.users.findOne({_id:yell.owner}).profile.profile_pic
      res.push(yell)
    });

 return res
 }
});



Api.addRoute('paws/fetch?yellId=', { authRequired: false }, {
  get: function () {
    console.log(this.request);
    var yell_id = this.queryParams.yellId
    yell_pawer=Yells.findOne({_id:yell_id}).paws
    console.log(yell_pawer)
    res = []  
    yell_pawer.forEach(function (owner) {
      pawer=Meteor.users.findOne({_id:owner}, {fields: {
        'username':1,
       'profile.firstName':1,
       'profile.lastName' :1,
       'profile.profile_pic':1
     }})
    
      res.push(pawer)
    });

 return res
 }
});



  //Convert yell act Schema to just one array!!




Api.addRoute('yell/fetch?lat=&lng=', { authRequired: false }, {
  get: function () {
    console.log(this.request);
    var urlLat = this.queryParams.lat
    var urlLng = this.queryParams.lng
    lat = Number(urlLat)
    lng = Number(urlLng)
    console.log(lng + ' ' + lat);
    return Yells.find({
      "loc.coordinates": {
        $near: {
          $geometry: 
             {
            type: "Point",
            coordinates: [lat, lng]
              },
       
        }
      }
    },{sort : {created_at:-1}}).fetch()
 }
});


 ///api/yell/fetch?lat=&lng=&max=
Api.addRoute('yell/fetch?lat=&lng=&max=$mod=trend', { authRequired: false }, {
  get: function () {
    console.log(this.request);
    var urlLat = this.queryParams.lat
    var urlLng = this.queryParams.lng
    var urlMaxDis = this.queryParams.max;
    lat = Number(urlLat)
    lng = Number(urlLng)
    maxdis = Number(urlMaxDis)
    console.log(lng + ' ' + lat);
    return Yells.find({
      "loc.coordinates": {
        $near: {
          $geometry: 
             {
            type: "Point",
            coordinates: [lat, lng]
              },
          $maxDistance: maxdis
        }
      }
    }, {sort : {rating:-1}}).fetch()
 }
});

Api.addRoute('yell/fetch?lat=&lng=$mod=trend', { authRequired: false }, {
  get: function () {
    console.log(this.request);
    var urlLat = this.queryParams.lat
    var urlLng = this.queryParams.lng
    lat = Number(urlLat)
    lng = Number(urlLng)
    console.log(lng + ' ' + lat);
    return Yells.find({
      "loc.coordinates": {
        $near: {
          $geometry: 
             {
            type: "Point",
            coordinates: [lat, lng]
              },
       
        }
      }
    },{sort : {rating:-1}}).fetch()
 }
});



Api.addRoute('comments/fetch?yell=', { authRequired: false }, {
  get: function () {
    console.log(this.request);
    var yell = this.queryParams.yell
    return Comments.find({yell_id:yell}).fetch()
 }
});api.js
