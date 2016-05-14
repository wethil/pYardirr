import React, {Component} from 'react';;
import { Meteor } from 'meteor/meteor';
import YellForm from './yells/YellForm.jsx'





class Index extends Component {
    render() {


        return (
            <div>
              		
                    <YellForm />
                  
           
            </div>
        );
    }
}

export default Index;

