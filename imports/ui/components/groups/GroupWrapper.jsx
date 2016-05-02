import React, {Component} from 'react';
import ReactDom from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import '../../../startup/both.js'
import { Meteor } from 'meteor/meteor';
import GroupSingle from './GroupSingle'

class GroupWrapper extends TrackerReact(Component) {
    
      constructor() {
        super();
        this.state = {
          subscription: {
            groups: Meteor.subscribe('groups')
          }
        }
    }
     getGroups() {
        return Groups.find({}).fetch(); //fetch must be called to trigger reactivity
    }
    
    render() {
        return (
             <ul className="GroupList" >
                {this.getGroups().map((group)=> {
                    return <GroupSingle key={group._id} groups={group}  />   
                })}
          </ul>
        );
    }
}

export default GroupWrapper;