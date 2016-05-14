import React from 'react';
import ReactDom from 'react-dom';
import { composeWithTracker } from 'react-komposer'
import Yells  from'../../../api/yells/yells.js'
import { Meteor } from 'meteor/meteor';
import {YellSingle} from './YellSingle.jsx'


/*
class YellWrapper extends  TrackerReact(React.Component) { 
   constructor() {
        super();
        this.state = {
          subscription: {
            yells: Meteor.subscribe('yells'),
            comments: Meteor.subscribe('comments')
          }
        }
    }
    
     getYells() {
        return Yells.find({}).fetch(); //fetch must be called to trigger reactivity
    }

    componentWillUnmount () {
      this.state.yells.stop()
    }
 
    render() {

        return (
          <ul className="YellList" >
                {this.getYells().map((yell)=> {
                    return <YellSingle key={yell._id} yells={yell}  />   
                })}
          </ul>
        );
    }
}

export default YellWrapper;


*/


const composer = (props,onData) =>{
  const subscription = Meteor.subscribe('yells')
  if (subscription.ready()) {
    const yells = Yells.find().fetch()
    onData( null , {yells} )
  }
}

export const YellWrapper = composeWithTracker (composer) (YellSingle)

