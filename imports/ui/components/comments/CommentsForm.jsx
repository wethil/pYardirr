import React, { Component } from 'react';

export default class CommentsForm extends Component {
	
  
	addComment(event){
		event.preventDefault();
		console.log(yell_id)
		 yell_id =  this.props.yell_id
		 lat = Session.get('lat');
		 long =Session.get('long');
		 console.log(`lat ${lat} and ${long}`)

		 comment_content = this.refs.comment.value.trim();
		Meteor.call('addComment',comment_content,yell_id,lat,long, error => {
			if (error) {
				console.log('error', error)
			} else {
				Meteor.call('incCommentQuan', yell_id, function (error, result) {});
				console.log('comment added');
			}

			
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
