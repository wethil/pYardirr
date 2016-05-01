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
    var mYell = this.bodyParams.mYell;
    var location = this.bodyParams.loc;
    var createdAt = this.bodyParams.createdAt;
    var data = {
      mYell: mYell,
      loc: location,
      createdAt: createdAt
    }

    Yells.insert(data);
    return "oki doki"
  }

});


Api.addRoute('yell?lat=&lng=&max=', { authRequired: false }, {
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
            coordinates: [lng, lat]
              },
          $maxDistance: maxdis
        }
      }
    }).fetch()
 }
});

Api.addRoute('yell?lat=&lng=', { authRequired: false }, {
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
            coordinates: [lng, lat]
              },
       
        }
      }
    }).fetch()
 }
});