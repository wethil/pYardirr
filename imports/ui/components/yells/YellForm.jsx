import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {YellWrapper} from './YellWrapper'


class YellForm extends Component {



    getlocation(e) {
        e.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                Session.set('lat', position.coords.latitude);
                Session.set('long', position.coords.longitude);
                console.log(' latitude ' + position.coords.latitude);
                console.log(' longtitude ' + position.coords.longitude);
                var url = "http://api.opencagedata.com/geocode/v1/json?query="
                var loc = position.coords.longitude + '%' + position.coords.latitude
                var key ="4c430f89af5ec4a0c11aea7adf55438e"
                HTTP.call('GET', url+loc+'&pretty=1&key='+key, {}, function (error, response) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(response);
                        /*
                         This will return the HTTP response object that looks something like this:
                         {
                           content: "String of content...",
                           data: Array[100], <-- Our actual data lives here.
                           headers: {  Object containing HTTP response headers }
                           statusCode: 200
                         }
                        */
                    }
                });
            });
        } else {
            console.log('error on location');
        }

    }
    addYell(event) {
        event.preventDefault();
         var yell = this.refs.mYell.value.trim();
         var lat = 39.480974; // Session.get('lat')
         var long =  -88.175493 // Session.get('long')
         var user = Meteor.userId();



        //long lat

        Meteor.call('addYell', yell,lat,long,user, error => {
            if (error) {
                console.log('error', error);
            }
             console.log('yell added ' );
            this.refs.mYell.value="";

        });

    }



    render() {
        return (
            <div>




            <button className="ui button" onClick={this.getlocation} > location </button>


                   <form className="yellForm" onSubmit={this.addYell.bind(this)} >
                        <input
                            type="text"
                            ref="mYell"
                            placeholder="yell something!"
                        />
                </form>
           </div>
        );
    }
}

export default YellForm;
