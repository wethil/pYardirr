import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import GroupWrapper from './GroupWrapper'

class GroupsName extends Component {
    
      addGroup(event) {
        event.preventDefault();
         var gName = this.refs.gName.value.trim();
         var lat = Session.get('lat')
         var long = Session.get('long')
       
             
        //long lat
       
        Meteor.call('addGroup', gName,long,lat, error => { 
            if (error) { 
                console.log('error', error); 
            } 
             console.log('group added ' );  
            this.refs.gName.value="";                     
        });
        
    }
    
    render() {
        return (
            <div>
                 
                  <form className="groupForm" onSubmit={this.addGroup.bind(this)} > 
                        <input
                            type="text"
                            ref="gName"
                            placeholder="Create a group!"
                        />
                </form>
                <GroupWrapper />
            </div>
        );
    }
}

export default GroupsName;