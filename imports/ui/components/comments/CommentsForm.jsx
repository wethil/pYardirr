import React, { Component } from 'react';

export default class CommentsForm extends Component {
	
  
	addComment(event){
		event.preventDefault();
		console.log(yell_id)
		 yell_id =  this.props.yell_id
		 comment_content = this.refs.comment.value.trim();
		Meteor.call('addComment',comment_content,yell_id, error => {
			if (error) {
				console.log('error', error)
			}
			console.log('comment added');
			this.refs.comment.value=""
		})
	}
	render() {
		return (
			<div>
				<form className="commentForm" onSubmit={this.addComment.bind(this)} >
					<input
						type="text"
						ref="comment"
						placeholder="make a comment!"
					/>
				 </form>
			</div>
		);
	}
}
