import React, {Component} from 'react';;
import { Meteor } from 'meteor/meteor';
import {YellMapComposer} from './composers/YellMapComposer.jsx'
import {YellWrapper} from './yells/YellWrapper.jsx'
import { YellMap } from './yells/YellMap.jsx'
import YellListTab from './yells/YellListTab.jsx'
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import _ from 'lodash'
const Index = React.createClass ({
  getInitialState (){

    return {
        parameter :"starting",
        zoom:3,
        firstLoc:"",
        loc:[23.07973, 11.60156],
        active:0

    }
  },




/*  $.get("http://ipinfo.io", function(response) {

        this.getLoc(response.loc);
       }, "jsonp"); */

componentDidMount (){

loca= $.getJSON('http://ipinfo.io', function(data){
        console.log(data)
        preLoc=data.loc.split(",")
        lat=  parseFloat(preLoc[0])
        lng = parseFloat(preLoc[1])
        exactLoc=[lat,lng]
         console.log(exactLoc)
      this.setState({firstLoc:exactLoc})
      }.bind(this)
    )


},







//<YellForm /> in three wide column
    render() {


    

      const fab_style = {
       left: '80%',
       zIndex : '9999'
      };
  /*

     if (Meteor.userId()) {
      userCard = <UserCardComposer userId={Meteor.userId()} />
     } else {
      userCard = "no user"
     }*/

      return (


      <div className="ui stackable two column grid main_content ">
        <div className="five wide column">
            <YellListTab />
        <div className="melek">
          <YellWrapper parameter={this.state.parameter} />
        </div>
        <FloatingActionButton  className="fab"  >
          <ContentAdd />
        </FloatingActionButton>


        </div>
        <div className="eleven wide column animated fadeIn">

              <YellMapComposer loc={this.state.loc} zoom={this.state.zoom} />

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
