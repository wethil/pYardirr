var React = require('react');
import LeftNavHead from '../LeftNavHead.jsx'
import {Tabs, Tab} from 'material-ui/Tabs';
import emitter from './YellEmitter.jsx'

const YellListTab = React.createClass({

  activeRecents () {
    console.log('recents');
  },

  activeNearby () {
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            newLoc = [position.coords.latitude,position.coords.longitude]
            zoom=13
          emitter.emit('nearby', 13,newLoc);
          }.bind(this))
    } else {
        console.log('error on location');
    }
    console.log('nearby');
  },


  activeApproved () {
    console.log('approved');
  },


  render: function() {
    const tab_style = {
       backgroundColor: '#3f51b5'
      };
    return (
      <div className="heads">
          <LeftNavHead />
          <Tabs>
            <Tab  style={tab_style}
                  onActive={this.activeRecents}
                  label="RECENTS"
                  />
            <Tab  style={tab_style}
                  onActive={this.activeNearby}
                  label="NEARBY"
                  />
            <Tab style={tab_style}
                  label="APPROVED"
                  onActive={this.activeApproved}
                  />
          </Tabs>
      </div>
    );
  }

});

 export default YellListTab;
