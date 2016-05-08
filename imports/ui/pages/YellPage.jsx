import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import YellHeader from '../components/yells/YellHeader.jsx'
import CommentSingle from '../components/comments/CommentSingle.jsx'
export class YellPage extends TrackerReact(Component) {
    constructor() {
        super();
        this.state = {
          subscription: {
            yells : Meteor. subscribe('yells'),
            comments: Meteor.subscribe('comments')
          }
        }
    }
  componentWillMount  () {
    id =  this.props.params.id
  }
  getComments () {
    return Comments.find({yell_id :id}).fetch();
  }
  render() {

    return (
      <div>
             yell : {id} <hr/> 
            <ul>
             
                 {this.getComments().map((comment)=> {
                          return <CommentSingle key={comment._id} comments={comment}  />   
                      })}
             </ul>
        </div> 
    );
  }
}

