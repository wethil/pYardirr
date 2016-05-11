import React, {Component} from 'react';
import {CommentButtons} from '../buttons/CommentButtons.jsx'

class CommentSingle extends Component {




  render() {
    return (
    	<div> 
	       <li>
	        
	            {this.props.comments.content}  <CommentButtons oID={this.props.comments._id} /> {this.props.comments.rating}
	           
	        </li>
      </div>
    );
  }
}

export default CommentSingle;