import React, {Component} from 'react';

class GroupSingle extends Component {
    render() {
        return (          
           <li>
            {this.props.groups.gName} 
           
        </li>
            
        );
    }
}

export default GroupSingle;