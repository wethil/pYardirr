import React, {Component} from 'react';;
import ReactDom from 'react-dom';
import '../../startup/both.js'
import { Meteor } from 'meteor/meteor';
import YellForm from './yells/YellForm.jsx'
import GroupForm from './groups/GroupForm.jsx'
import {UserMenu} from './accounts/UserMenu.jsx'




class Index extends Component {
    render() {


        return (
            <div>
              		<UserMenu />
                    <YellForm />
                    <GroupForm />
           
            </div>
        );
    }
}

export default Index;

