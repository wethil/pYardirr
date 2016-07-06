import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Yells  from'../../../../api/yells/yells.js'
import { Meteor } from 'meteor/meteor';
import YellCard from '../../yells/yellCard/YellCard.jsx'



const composer = (props,onData) =>{
	
	yellId=props.yellId
  const subscription = Meteor.subscribe('thisYell',yellId)

  if (subscription.ready()) {
    const yell = Yells.findOne({_id:yellId})
    

     	console.log(yell)
 

    onData( null , {yell} )
  }
}

export const YellCardComposer = composeWithTracker (composer) (YellCard)


