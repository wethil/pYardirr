import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import {PlansFormComposer} from '../../composers/plans/PlansFormComposer.jsx'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import YellCard from '../yellCard/YellCard.jsx'


export const YellListInput = React.createClass({
   getInitialState () {
    return  {
        open : false
            
    };
  },
   handleOpen ()  {
    this.setState({open: true});
  },

  handleClose ()  {
    this.setState({open: false});
  },

  render() {
    const styles = {
      drawer :{
        zIndex:2
      }
    };
 


   
    return (
      <div>

            <ListItem onTouchTap={this.handleOpen}  
            children ={<TextField disabled={true} style={{height: 30}}
                      hintText="Hint Text"
                    />}
            leftAvatar={<Avatar src="images/ok-128.jpg" />}
            //rightIcon={<CommunicationChatBubble />}
          /> 
        
            <Drawer  containerStyle={styles.drawer} width={307} openSecondary={true} open={this.state.open} >
              <AppBar title="AppBar" />
              <YellCard />
            </Drawer>
                              
      </div>
    );
  }
});





/*
 <Dialog
          title="Dialog With Date Picker"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <div className="ui grid">
          <div className="column">
            <PlansFormComposer />
          </div>
        </div>
          
        
        </Dialog>*/