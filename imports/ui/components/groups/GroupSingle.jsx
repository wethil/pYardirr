import React, {Component} from 'react';
import { Link } from 'react-router';
class GroupSingle extends Component {
    render() {
        return (          
           <li>
            <Link to={`/groups/${this.props.groups._id}`}>
            {this.props.groups.gName} 
           </Link>
        </li>
            
        );
    }
}

export default GroupSingle;