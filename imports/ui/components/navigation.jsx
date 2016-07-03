import React from 'react';
import { IndexLink, Link } from 'react-router';
import {UserMenu} from './accounts/UserMenu.jsx'
import IconMenu from 'material-ui/IconMenu';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SvgIcon from 'material-ui/SvgIcon';
export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }



  render() {

    const styles = {
  toolbar_style :{
    backgroundColor: '#3f51b5'
},
  mediumIcon: {
    width: 48,
    height: 48,
    marginTop : 6
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
  iconBut :{
    marginTop : 6
  }
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
     <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
  </SvgIcon>
);

 
    currentUser=this.props.user
    return (
      <Toolbar style={styles.toolbar_style}  >
        <ToolbarGroup firstChild={true}>
             <IconButton  style={styles.IconBut} >
                    <NavigationMenu/>
             </IconButton>
            
             <ToolbarTitle text='yellfi' />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text={currentUser.username} />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton label="Create Broadcast" primary={true} />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}




/*
export const Navigation = () => (

<div className="ui top fixed borderless inverted menu">
   <IndexLink className="item" to="/" activeclassName="active item">
   Index
   </IndexLink>
    <Link to="/doc" className="item">
      Documentation
    </Link>
    <Link to="/paws" className="item">
      Paws
    </Link>
    <div className="right menu">
      <UserMenu />
    </div>
</div>
    
  
 
)*/