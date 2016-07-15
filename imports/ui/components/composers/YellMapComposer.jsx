import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Yells  from'../../../api/yells/yells.js'
import { Meteor } from 'meteor/meteor';
import {YellMap} from '../yells//YellMap.jsx'



const composer = (props,onData) =>{
	queryType=props.queryType
	locationParameter = props.locationParameter

  const subscription = Meteor.subscribe('yells',queryType,locationParameter)

  if (subscription.ready()) {
    const yells = Yells.find().fetch()


    onData( null , {yells} )
  }
}

export const YellMapComposer = composeWithTracker (composer) (YellMap)
