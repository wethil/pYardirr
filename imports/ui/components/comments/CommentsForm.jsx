import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea'
import keydown from 'react-keydown';
import TextField from 'material-ui/TextField';

export  default class CommentsForm extends Component{
	componentWillMount () {
    this.state = {
      comment: "",
      hint : "Make a comment for this plan",
      disabled :false
    };
      	console.log(this.props.ownership)
			user= Meteor.userId()
			console.log(this.props.approved)
		approv=	_.includes(this.props.approved,user)
		console.log(approv)

		if (this.props.ownership==0) {
  			approv==true ? 

  			this.setState({
				hint:"Make a comment for this plan",
				disabled:false
			}) :

			this.setState({
				hint:"You should be approved to comment",
				disabled:true
			})
  		}
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
	
styles={
	hint : {
		fontSize:14
	}
}

		
		return (
			
		
			 <TextField		hintStyle={styles.hint}
							value={this.state.comment}
							onChange={this.handleChange.bind(this)}
							multiLine={true}
							hintText={this.state.hint}
							onKeyDown={this.handleSubmit.bind(this)}
							floatingLabelFixed={true}
							disabled={this.state.disabled}
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