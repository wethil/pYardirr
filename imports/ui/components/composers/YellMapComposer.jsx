import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Yells  from'../../../api/yells/yells.js'
import { Meteor } from 'meteor/meteor';
import {YellMap} from '../yells//YellMap.jsx'



const composer = (props,onData) =>{
	
  const subscription = Meteor.subscribe('yells')

  if (subscription.ready()) {
    const yells = Yells.find().fetch()
    

     	console.log(yells)
 

    onData( null , {yells} )
  }
}

export const YellMapComposer = composeWithTracker (composer) (YellMap)


