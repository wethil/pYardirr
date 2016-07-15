import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Yells  from'../../../../api/yells/yells.js'
import { Meteor } from 'meteor/meteor';
import YellCardGuest from '../../yells/yellCard/YellCardGuest.jsx'



const composer = (props,onData) =>{
	
	yellId=props.yellId
	console.log(yellId)
  const subscription = Meteor.subscribe('thisYell',yellId)

  if (subscription.ready()) {
    const yell = Yells.findOne({_id:yellId})
    

    onData( null , {yell} )
  }
}

export const YellCardComposerGuest = composeWithTracker (composer) (YellCardGuest)


