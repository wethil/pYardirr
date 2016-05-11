import React, {Component} from 'react';
import { Link } from 'react-router';

class YellSingle extends Component {
    render() {
        return (
           <li>
		           <Link to={`/yells/${this.props.yells._id}`}>
		            {this.props.yells.content}  --> rating :
		            {this.props.yells.rating}
		           </Link>
        </li>
        );
    }
}

export default YellSingle;