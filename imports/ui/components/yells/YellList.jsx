import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import YellCard from './yellCard/YellCard.jsx'
import {PlansFormComposer} from '../composers/plans/PlansFormComposer.jsx'
import { Meteor } from 'meteor/meteor';
import _ from 'lodash'
import RegisterForm from '../accounts/RegisterForm.jsx'

export const YellList = React.createClass({
  getInitialState () {
    yell =this.props.yells[0]
    yellOwner={}
    return  {
        open : false,
        drawerContentInput : 0,
        yell : yell,
        yellOwner : yellOwner           
    };


  },

    componentWillReceiveProps(nextProps) {
    yell = _.find(nextProps.yells ,  {'_id': this.state.yell._id } );
     this.setState({
      yell: yell
    });
    
 },

   handleInputOpen ()  {
    this.setState({ drawerContentInput:1, open: true});
  },
  handleCardOpen  ()   {

    this.setState({ drawerContentInput:0,  open: true});
   
  },
  getDrawerContent () {
    if (this.state.drawerContentInput ==0) {
      return (

       <YellCard yell={this.state.yell} yellOwner={this.state.yellOwner} />

       );
    } else {
      return ( <PlansFormComposer/> )
    }
  },

  render() {
     const styles = {
      drawer :{
        zIndex:2
      }
    }

    const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);
//  before p content <span style={{color: darkBlack}}>Brunch this weekend?</span><br />

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const fab_style = {
  marginRight: 20,
};

 
if (this.props.yells && this.props.yells.length > 0) {
                                var yells =[]
                                 this.props.yells.forEach((yell) => {
                                    yells.push(
                                      <div key={yell._id}>
                                             <ListItem    
                                                          onTouchTap={() => {this.setState({yell:yell, yellOwner:yell.owner }); console.log(this.state.yell); this.handleCardOpen() }}    
                                                          leftAvatar={<Avatar src={yell.owner.profile.avatar} />}
                                                          rightIconButton={rightIconMenu}
                                                          primaryText={yell.owner.username}
                                                          secondaryText={
                                                            <p> {yell.plan} </p>
                                                          }
                                                          secondaryTextLines={1}
                                                        />
                                                            <Divider  inset={true} />
                                         </div>                   
                                      );
                                    
                                  });
                              } else {
                                yells = "No yell" 
                              }




let registerForm;
    if(!Meteor.userId()){
      registerForm =  <RegisterForm />
    }

    return (
      <div>
      
       
          <List>
            <ListItem onTouchTap={this.handleInputOpen}  
                children ={<TextField disabled={true} style={{height: 30}}
                          hintText="Hint Text"
                        />}
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                //rightIcon={<CommunicationChatBubble />}
              /> 
              {registerForm}
                
      {yells}

          </List>

         
       <Drawer  containerStyle={styles.drawer} width={349} openSecondary={true} open={this.state.open} >
            <AppBar title="AppBar" />
            {this.getDrawerContent()}
      </Drawer>
    </div>
      );
 


  }
});


