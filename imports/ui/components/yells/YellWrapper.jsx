import React from 'react';
import ReactDom from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import '../../../startup/both.js'
import { Meteor } from 'meteor/meteor';
import YellSingle from './YellSingle.jsx'

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