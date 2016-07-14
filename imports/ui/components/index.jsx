import React, {Component} from 'react';;
import { Meteor } from 'meteor/meteor';
import {YellMapComposer} from './composers/YellMapComposer.jsx'
import {YellGuestWrapper} from './yells/YellGuestWrapper.jsx'
import {YellWrapper} from './yells/YellWrapper.jsx'
import { YellMap } from './yells/YellMap.jsx'
import YellListTab from './yells/YellListTab.jsx'
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import emitter from './yells/YellEmitter.jsx'
import _ from 'lodash'
const Index = React.createClass ({
  getInitialState (){

    return {
        locationParameter : false,
        firstLoc:"",
        loc:[23.07973, 11.60156],
        queryType:0

    }
  },




/*  $.get("http://ipinfo.io", function(response) {

        this.getLoc(response.loc);
       }, "jsonp"); */

componentDidMount (){



},







//<YellForm /> in three wide column
    render() {
      emitter.addListener('changeQuery', (locationParameter,queryType) => {
             this.setState({
               locationParameter:locationParameter,
               queryType:queryType
             })
           });



      const fab_style = {
       left: '80%',
       zIndex : '9999'
      };


     if (Meteor.userId()) {
      yellList =     <YellWrapper
                    queryType={this.state.queryType}
                    locationParameter={this.state.locationParameter} />
     } else {
      yellList =  <YellGuestWrapper
                    queryType={this.state.queryType}
                    locationParameter={this.state.locationParameter} />
     }

      return (


      <div className="ui stackable two column grid main_content ">
        <div className="five wide column">
            <YellListTab />
        <div className="melek">
          {yellList}
        </div>
        <FloatingActionButton  className="fab"  >
          <ContentAdd />
        </FloatingActionButton>


        </div>
        <div className="eleven wide column animated fadeIn">

        {/*      <YellMapComposer
                queryType={this.state.queryType}
                locationParameter={this.state.locationParameter}
                    />*/}

          </div>
      </div>

      );
    }
})

export default Index;





  /*
      return (

      <div className="ui stackable two column grid">
             <MuiThemeProvider muiTheme={getMuiTheme()}>
                  <MyAwesomeReactComponent />
                </MuiThemeProvider>

                <div className="seven wide column"> <YellWrapper /> </div>
              <div  className="six wide column animated fadeIn">  <MapComposer />  </div>
          </div>

        );*/
