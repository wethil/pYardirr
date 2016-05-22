import React, {Component} from 'react';;
import { Meteor } from 'meteor/meteor';
import YellForm from './yells/YellForm.jsx'
import UserCard from './accounts/UserCard.jsx'
import {YellWrapper} from './yells/YellWrapper.jsx'
import { MainPageComments } from './comments/MainPageComments/MainPageComments.jsx'






class Index extends Component {


    render() {
      
        return (
        <div className="ui main container">	
           <div className="ui stackable three column grid">
           	<div className="three wide column"> <UserCard /> <YellForm /> </div>
           	<div className="nine wide column"> <YellWrapper /> </div>
            <div  className="four wide column animated fadeIn "  >   <MainPageComments />  </div>
           </div>
         </div>  
        );
    }
}

export default Index;

