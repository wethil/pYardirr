import React, {Component} from 'react';;
import { Meteor } from 'meteor/meteor';
import {YellMapComposer} from './composers/YellMapComposer.jsx'
import {YellWrapper} from './yells/YellWrapper.jsx'
import { YellMap } from './yells/YellMap.jsx'
import LeftNavHead from './LeftNavHead.jsx'
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Index extends Component {
      

//<YellForm /> in three wide column
    render() {

    const tab_style = {
       backgroundColor: '#3f51b5'
      };

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
       <div className="heads">
                <LeftNavHead />
                        <Tabs>
                        <Tab style={tab_style}
                         
                          label="RECENTS"
                        />
                        <Tab style={tab_style}
                          
                          label="FAVORITES"
                        />
                        <Tab style={tab_style}
                          label="NEARBY"
                        />
                      </Tabs>
           </div>  
              <div className="melek">
                  <YellWrapper />
                </div>  
               <FloatingActionButton  className="fab"  >
                      <ContentAdd />
              </FloatingActionButton>
                  
                
         </div>         
      	  	 	{/*<div className="eleven wide column animated fadeIn"><YellMapComposer /></div>*/} 
      	  </div>         
        
        );
    }
}

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