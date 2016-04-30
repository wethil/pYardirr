import React, {Component} from 'react';


class YellSingle extends Component {
    render() {
        return (
           <li>
            {this.props.yells.content} 
           
        </li>
        );
    }
}

export default YellSingle;