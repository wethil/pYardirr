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


Api.addRoute('yell?lat=&lng=&maxdis=&mindis=', { authRequired: false }, {
  get: function () {
    console.log(this.request);
    var urlLat = this.queryParams.lat
    var urlLng = this.queryParams.lng
    var urlMaxDis = this.queryParams.maxdis;
    var urlMinDis = this.queryParams.mindis;

    lat = Number(urlLat)
    lng = Number(urlLng)
    maxdis = Number(urlMaxDis)
    mindis = Number(urlMinDis)
    console.log(lng + ' ' + lat);
    

    return Yells.find({
      "loc.coordinates": {
        $near: {
          $geometry: 
             {
            type: "Point",
            coordinates: [lng, lat]
              },
          $minDistance: mindis,
          $maxDistance: maxdis

        }
      }
    }).fetch()

 }

});