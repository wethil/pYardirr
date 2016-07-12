import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { grey400, grey700, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { YellCardComposer } from '../composers/yellCard/YellCardComposer.jsx'
import { PlansFormComposer } from '../composers/plans/PlansFormComposer.jsx'
import { Meteor } from 'meteor/meteor';
import _ from 'lodash'
import RegisterForm from '../accounts/RegisterForm.jsx'
import {YellStepper} from "./YellStepper.jsx"
import emitter from './YellEmitter.jsx'
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export const YellList = React.createClass({
    getInitialState() {
        yell = ""
        yellOwner = {}
        return {
            open: false,
            drawerContentInput: 1,
            drawerTitle:"",
            yell: yell,
            yellOwner: yellOwner,
            yells: this.props.yells
        };


    },
  

    handleInputOpen() {
        this.setState({ drawerContentInput: 1,
                        open: true});
    },
    handleCardOpen() {

        this.setState({ drawerContentInput:0,
                      open: true});

    },
    handleDrawerClose(event) {
      this.setState({open:false})
    },


  render() {
    const styles = {
      drawer: {
        zIndex: 2
        },
      content: {
        fontSize: 11
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






    const fab_style = {
      marginRight: 20,
    };


    const currentUser = Meteor.userId();

    if (this.props.yells && this.props.yells.length > 0) {
      var yells = []
      this.props.yells.forEach((yell) => {
        currentUser == yell.ownerId
        ?
        rightIconMenu = <IconMenu
                          iconButtonElement={iconButtonElement}
                          >
                              <MenuItem
                              onTouchTap={()=> {
                                  this.setState({
                                    yell:yell._id,
                                    drawerContentInput:0
                                   })
                                  emitter.emit('join')
                                }
                              }
                              > Joining
                            </MenuItem>

                            <MenuItem>Delete</MenuItem>
                        </IconMenu>
         :
        rightIconMenu = <IconMenu iconButtonElement={iconButtonElement}>
                            <MenuItem
                              onTouchTap={()=> {
                                  this.setState({yell:yell._id  })
                                  emitter.emit('join')
                                }
                              }
                              > Joining
                            </MenuItem>
                            <MenuItem>Block user</MenuItem>
                       </IconMenu>

        content = ` ${moment(yell.date).calendar()} `


        yells.push(
          <div key={yell._id}>
            <ListItem
                  onTouchTap={() => {this.setState({yell:yell._id  });
                  console.log(this.state.open);
                  this.setState({ drawerContentInput:0,  open: true})
                  }}
                  leftAvatar={<Avatar src={yell.owner.profile.avatar} />}
                  rightIconButton={rightIconMenu}
                  primaryText={yell.plan }
                  secondaryText={

                  <p>  <span style={{color: grey700}}>{yell.owner.username}</span> --
                  <span style={styles.content}>{content} </span> </p>
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
    if (!Meteor.userId()) {
       registerForm = <RegisterForm />
    }
     emitter.addListener('close', this.handleDrawerClose);
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

        <AppBar title={
             this.state.drawerContentInput==1
             ?
                "Post new plan"
              :
                "Plan"
             }

                iconElementLeft={
                  <IconButton
                        onMouseDown={()=>this.setState({open:false})}
                  ><NavigationClose /></IconButton>}

                    />
          {
            this.state.drawerContentInput ==0
            ?
              <YellCardComposer yellId={this.state.yell}  />
            :
              <PlansFormComposer/>
          }
      </Drawer>
    </div>
    );
  }
});
