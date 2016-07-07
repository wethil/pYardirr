import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Yells  from'../../../api/yells/yells.js'
import { Meteor } from 'meteor/meteor';
import {YellList} from './YellList.jsx'



const composer = (props,onData) =>{

	
  const subscription = Meteor.subscribe('yells')

  if (subscription.ready()) {
    const yells = Yells.find().fetch()
    
       yells.forEach(function (yell) {
       	user_id =yell.ownerId
    	Meteor.subscribe("ThisUser",user_id)
    });



 

    onData( null , {yells} )
  }
}

export const YellWrapper = composeWithTracker (composer) (YellList)


