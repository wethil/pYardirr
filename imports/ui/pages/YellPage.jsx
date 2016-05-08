import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import YellHeader from '../components/yells/YellHeader.jsx'
import CommentSingle from '../components/comments/CommentSingle.jsx'
import CommentsForm from '../components/comments/CommentsForm.jsx'
export class YellPage extends TrackerReact(Component) {
   
     componentWillMount  () {
      yell_id =  this.props.params.id
    
  }
    /*constructor() {
     
        super();
              this.state = {
          subscription: {
            
            comments: Meteor.subscribe('comments.inYell')
          }
        }
    }*/

  getThisYell() {
    return Yells.findOne({_id:yell_id})
  }

  getComments () {
    return Comments.find({yell_id :yell_id}).fetch();
  }

 
  render() {
       comments_sub = Meteor.subscribe('comments.inYell',yell_id)
     if (comments_sub.ready()){ 
    return (
          <div>
                  yell : {yell_id} <hr/>
                  yell content : {this.getThisYell().content} <br/>

                  <CommentsForm yell_id={yell_id} />

              <ul>
              {this.getComments().map((comment)=> {
                    return <CommentSingle 
                              key={comment._id} 
                              comments={comment}  />   
               })}
              </ul>
          </div> 
    );
    } else {
      return ( 
          <div> unready </div>
        )
    }
  }
}

