import React, {Component} from 'react';;
import { Meteor } from 'meteor/meteor';
import YellForm from './yells/YellForm.jsx'
import UserCard from './accounts/UserCard.jsx'
import {YellWrapper} from './yells/YellWrapper.jsx'





class Index extends Component {
    render() {


        return (
        <div className="ui main container">	
           <div className="ui stackable two column grid">
           	<div className="four wide column"> <UserCard /> </div>
           	<div className="twelve wide column"> <YellWrapper /> </div>
           </div>
         </div>  
        );
    }
}

export default Index;

