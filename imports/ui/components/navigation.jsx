import React from 'react';
import { IndexLink, Link } from 'react-router';
import {UserMenu} from './accounts/UserMenu.jsx'

export const Navigation = () => (

<div className="ui top fixed borderless inverted menu">
   <IndexLink className="item" to="/" activeclassName="active item">
   Index
   </IndexLink>
    <Link to="/doc" className="item">
      Documentation
    </Link>
    <Link to="/two" className="item">
      Friends
    </Link>
    <div className="right menu">
    	<UserMenu />
    </div>
</div>
		
	
 
)