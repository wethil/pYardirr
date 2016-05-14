import React, { Component } from 'react';

const renderIfData = (thisYell) => {
	if (thisYell) {
		return ( 
			<div className="className">
				 <h1> yell : {thisYell.content}</h1>
				 <button className="ui button">but</button>
		 </div>
		  )
	} else {
		return <p className="className">no yell</p>
	}
}

export const MainYell = ({thisYell}) => (
	<div> {renderIfData(thisYell)} </div>
	)


/**
export class MainYell extends Component {
	componentWillMount () {
		content: this.props.yell_content
	}
	render() {
		return (
			<div> id: {content} </div>
		);
	}
}




export  class MainYells extends TrackerReact(Component) {
componentWillMount () {
	yell_id = this.props.yell_id
}


 componentWillUnmount (){
 	console.log('unmount')
 }

  getThisYell() {
    return Yells.findOne({_id:yell_id})
  }

  getComments () {
    return Comments.find({yell_id :yell_id}).fetch();
  }

	render() {

		subscription = Meteor.subscribe('comments.inYell', this.props.yell_id);
			if (subscription.ready()) {

				return (
						<div className="className">
							yell : {yell_id}
							yell content : {this.getThisYell().content} <br/>
							comment quantity : {this.getThisYell().comment_quantity}
							comment rating : {this.getThisYell().rating} <br/>
						</div>
					);
			} else {
				return ( 
						<div className="className">unreadt</div>
					);  
			}
	}
}

**/