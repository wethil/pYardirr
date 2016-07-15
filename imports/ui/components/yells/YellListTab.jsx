var React = require('react');
import LeftNavHead from '../LeftNavHead.jsx'
import {Tabs, Tab} from 'material-ui/Tabs';
import emitter from './YellEmitter.jsx'

const YellListTab = React.createClass({

  activeRecents () {
    emitter.emit('changeLoc', 2,[23.07973, 11.60156]);
    locationParameter=false
    //0 is queryType
    emitter.emit('changeQuery',locationParameter,0)
  },

  activeNearby () {
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
           newLoc = [position.coords.latitude,position.coords.longitude]
            zoom=13
          
            //0 is query type
           emitter.emit('changeQuery',newLoc,1) //change composers queries
          emitter.emit('changeLoc', 12,newLoc);


          }.bind(this))
    } else {
      loca= $.getJSON('http://ipinfo.io', function(data){
              console.log(data)
              preLoc=data.loc.split(",")
              lat=  parseFloat(preLoc[0])
              lng = parseFloat(preLoc[1])
              exactLoc=[lat,lng]
               console.log(exactLoc)

               //1 is queerytype
               emitter.emit('changeQuery',exactLoc,1) //change composers queries
               emitter.emit('changeLoc',13,exactLoc)

            }.bind(this)
          )

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
