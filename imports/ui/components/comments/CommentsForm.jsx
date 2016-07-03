import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea'
import keydown from 'react-keydown';
import TextField from 'material-ui/TextField';

export  default class CommentsForm extends Component{
	componentWillMount () {
    this.state = {
      comment: ""
    };
  }
	 handleChange (e)  {
        this.setState({
            comment: e.target.value
        });
    }
     handleSubmit(e) {
	        if (e.key === 'Enter') {
				e.preventDefault()
				comment =	this.state.comment
				console.log(`comment = ${comment}`);
				yell_id = this.props.yell_id
				console.log(`yell id =${yell_id}`)

				//lat = Session.get('lat');
				//long =Session.get('long');
				lat = 35
				long =35
				console.log(`lat ${lat} and ${long}`)
				ownerId = Meteor.userId();
				comment_content = this.state.comment.trim();
				Meteor.call('addComment',comment_content,yell_id,lat,long,ownerId, error => {
					if (error) {
					console.log('error', error)
					} else {
					Meteor.call('incCommentQuan', yell_id, function (error, result) {});
					console.log('comment added');
					}
				});
	          this.setState({
	            comment: "",
	            row:1
	        });

	       commentS =this.state.comment
	       console.log(`comment state = ${commentS}`)
	    
    }
   }

	render() {
		
		return (
			
		
			 <TextField
				 		  value={this.state.comment}
				 		  onChange={this.handleChange.bind(this)}
				 		  multiLine={true}
					      hintText="Make a comment for this plan"
					      onKeyDown={this.handleSubmit.bind(this)}
					      floatingLabelFixed={true}
					    />
		);
	}
}








/*
 <form className="ui reply form" >
					<div className="field">
						<TextareaAutosize  
							onChange={this.handleChange.bind(this)}
							onKeyPress={this.handleSubmit.bind(this)}
							className="comment_ta"
							rows={this.state.row} 
							type="text"
							value={this.state.comment}
							placeholder="make a comment!">
						</TextareaAutosize>
					</div> 
				 </form>
			
*/			    