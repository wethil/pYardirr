import React, {Component} from 'react';

class CommentSingle extends Component {
  render() {
    return (
    	<div> 
	       <li>
	        
	            {this.props.comments.content} 
	           
	        </li>
      </div>
    );
  }
}

export default CommentSingle;