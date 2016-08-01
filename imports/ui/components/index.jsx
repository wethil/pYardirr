import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {YellMapComposer} from './composers/YellMapComposer.jsx'
import {ItemMenu} from './items/ItemMenu.jsx'
import { YellMap } from './yells/YellMap.jsx'
import YellListTab from './yells/YellListTab.jsx'
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import emitter from './yells/YellEmitter.jsx'
import _ from 'lodash'
import FlatButton from 'material-ui/FlatButton';
import {MainYells} from './MainYells.jsx'

const Index = React.createClass ({
  getInitialState (){

    return {
        locationParameter : false,
        firstLoc:"",
        loc:[23.07973, 11.60156],
        queryType:0

    }
  },




/*  $.get("http:
//ipinfo.io", function(response) {

        this.getLoc(response.loc);
       }, "jsonp"); */







//<YellForm /> in three wide column
    render() {
      emitter.addListener('changeQuery', (locationParameter,queryType) => {
             this.setState({
               locationParameter:locationParameter,
               queryType:queryType
             })
           });


      return (


            <div className="ui stackable two column grid main_content ">
              <div className="five wide column">
               <YellListTab />
                <div className="melek">
                  <MainYells  
                          queryType={this.state.queryType}
                          locationParameter={this.state.locationParameter} />
                <FlatButton label="Add Item" onTouchTap={()=>{ emitter.emit('openItemDrawer') } } />
                <FlatButton label="Add need" onTouchTap={console.log('needs')} />
                <FlatButton label="Add plan" onTouchTap={console.log('plans')} />
                </div>
              </div>
              <div className="eleven wide column animated fadeIn">
                  <YellMapComposer
                          queryType={this.state.queryType}
                          locationParameter={this.state.locationParameter}/>
              </div>
                <ItemMenu />
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
