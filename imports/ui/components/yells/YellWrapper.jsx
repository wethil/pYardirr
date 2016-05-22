import React from 'react';

import { composeWithTracker } from 'react-komposer'
import Yells  from'../../../api/yells/yells.js'
import { Meteor } from 'meteor/meteor';
import {YellSingle} from './YellSingle.jsx'



const composer = (props,onData) =>{
	
  const subscription = Meteor.subscribe('yells')
  if (subscription.ready()) {
    const yells = Yells.find().fetch()
    onData( null , {yells} )
  }
}

export const YellWrapper = composeWithTracker (composer) (YellSingle)

