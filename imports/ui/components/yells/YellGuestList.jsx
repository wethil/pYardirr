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
import emitter from './YellEmitter.jsx'
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export const YellGuestList = React.createClass({
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





    const fab_style = {
      marginRight: 20,
    };


    if (this.props.yells && this.props.yells.length > 0) {
      var yells = []
      this.props.yells.forEach((yell) => {
        content = ` ${moment(yell.date).calendar()} `


        yells.push(
          <div key={yell._id}>
            <ListItem
                  onTouchTap={() => {this.setState({yell:yell._id  });
                  console.log(this.state.open);
                  this.setState({ drawerContentInput:0,  open: true})
                  }}
                  leftAvatar={<Avatar src={yell.owner.profile.avatar} />}
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
        <ListItem
            children ={<TextField disabled={true} style={{height: 30}}
            hintText="Hint Text"
            />}
            leftAvatar={<Avatar src="images/ok-128.jpg" />}
            //rightIcon={<CommunicationChatBubble />}
            />
        {yells}
      </List>
      <Drawer  containerStyle={styles.drawer} width={349} openSecondary={true} open={this.state.open} >

        <AppBar title="Plan"
                iconElementLeft={
                  <IconButton
                        onMouseDown={()=>this.setState({open:false})}
                  ><NavigationClose /></IconButton>} />
              <YellCardComposer yellId={this.state.yell}  />
      </Drawer>
    </div>
    );
  }
});
