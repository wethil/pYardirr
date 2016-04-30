import React from 'react';
import ReactDom from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import '../../startup/both.js'
import { Meteor } from 'meteor/meteor';


class Index extends  TrackerReact(React.Component) { 
   constructor() {
        super();
        this.state = {
          subscription: {
            yells: Meteor.subscribe('yells')
          }
        }
    }
    
     getYells() {
        return Yells.find({}).fetch(); //fetch must be called to trigger reactivity
    }
 
    render() {
let yells = this.getYells();
         if(yells.length<1) {
            return (<div> Loading</div>)
        }
        return (
            <div>
                {yells[0].owner}
            </div>
        );
    }
}

export default Index;