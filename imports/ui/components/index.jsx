import React, {Component} from 'react';;
import { Meteor } from 'meteor/meteor';
import YellForm from './yells/YellForm.jsx'
import {UserCardComposer} from './composers/UserCardComposer.jsx'
import {YellWrapper} from './yells/YellWrapper.jsx'
import { MapComposer } from './composers/MapComposer.jsx'
import TrackerReact from 'meteor/ultimatejs:tracker-react';



class Index extends TrackerReact(Component) {
       constructor() {
        super();
        this.state = {
          subscription: {
            users: Meteor.subscribe('users')
          }
        }
    }

      componentWillUnmount() {
        this.state.subscription.users.stop();
    }

    render() {
 
        return (
        <div className="ui main container">	
           <div className="ui stackable three column grid">
           	<div className="three wide column"> <UserCardComposer /> <YellForm /> </div>
           	<div className="nine wide column"> <YellWrapper /> </div>
            <div  className="four wide column animated fadeIn "  >   <MapComposer />  </div>
           </div>
         </div>  
        );
    }
}

export default Index;

