import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Yells  from'../../../api/yells/yells.js'
import { Meteor } from 'meteor/meteor';
import {YellMap} from '../yells//YellMap.jsx'



const composer = (props,onData) =>{
 loc=props.loc
 console.log('location from index');
 console.log(loc);

  const subscription = Meteor.subscribe('yells')

  if (subscription.ready()) {
    const yells = Yells.find().fetch()





    onData( null , {yells,loc} )
  }
}

export const YellMapComposer = composeWithTracker (composer) (YellMap)
