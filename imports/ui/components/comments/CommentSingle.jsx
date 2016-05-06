import React, {Component} from 'react';


class CommentSingle extends Component {
    render() {
        return (
           <li>
            {this.props.comments.content} 
           
        </li>
        );
    }
}

export default CommentSingle;