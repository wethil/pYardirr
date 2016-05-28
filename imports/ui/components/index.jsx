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
//<YellForm /> in three wide column
    render() {
 
        return (
     
           <div className="ui stackable three column grid">
           	<div className="three wide column"> <UserCardComposer />  </div>
           	<div className="seven wide column"> <YellWrapper /> </div>
            <div  className="six wide column animated fadeIn "  >   <MapComposer />  </div>
           </div>
        
        );
    }
}

export default Index;

