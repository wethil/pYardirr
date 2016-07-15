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




     emitter.addListener('close', this.handleDrawerClose);
    return (
    <div>
      <List>
        <ListItem onTouchTap={this.handleInputOpen}
            children ={<TextField disabled={true} style={{height: 30}}
            hintText="Create a Plan"
            />}
            leftAvatar={<Avatar src="data:image/jpeg;base64,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" />}
            //rightIcon={<CommunicationChatBubble />}
            />

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
