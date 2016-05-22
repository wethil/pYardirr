import { Meteor } from 'meteor/meteor';
import '../yells.js'
import Api from '../../rest.js'
Meteor.publish("yells", function () {
  return Yells.find();
});


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


    Yells.insert(data);
    return "oki doki"
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
});