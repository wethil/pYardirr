
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash'
import  {Requerers} from '../../composers/yellCard/Requerers.jsx'
import Dialog from 'material-ui/Dialog';
import CommentsForm from '../../comments/CommentsForm.jsx'
import {CommentsOnMain} from '../../composers/CommentsOnMain.jsx'



export const YellCard = React.createClass({
    getInitialState () {
      return  {
        joiningD:false,
        commentsD:false      
    }
  },

     Join ()  {
     yell= this.props.yell._id
     userId= Meteor.userId();
    Meteor.call('reqJoin', userId,yell, function(error){
      if (error) {
        console.log(error)
      }
    } );
  }, 
  cancelJoin()   {
     yell= this.props.yell._id
     userId= Meteor.userId();
    Meteor.call('cancelJoin', userId,yell, function(error){
      if (error) {
        console.log(error)
      }
    } );
  } ,

  joiningDOpen  ()  {
    this.setState({joiningD: true});
  },
   joiningDClose  ()  {
    this.setState({joiningD: false});
  },

  commentDOpen ()  {
    this.setState({commentsD: true});
  },
   commentDClose ()  {
    this.setState({commentsD: false});
  },


  render() {


  if (this.props.yell.ownerId==Meteor.userId()) {
    ownership = 1
   } else {
    ownership = 0
   }
  

      joined = _.includes(this.props.yell.requested, Meteor.userId());


      if(ownership==0) {
        joined
               ? 
         button = <FlatButton label="requested" onMouseDown={ ()=> {this.cancelJoin()}  } /> 
               :
         button =  button = <FlatButton label="Join" onMouseDown={ ()=> {this.Join()}  } /> 

      } else {
       this.props.yell.requested&&this.props.yell.requested.length>0
           ? 
          button = <FlatButton label="Approve all" onMouseDown={ ()=> {this.Join()}  } /> 
          :
          button =""
      }

 
    const actionsForJoining = [
      button,
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.joiningDClose}
      />
    ];

      const actionsforComments = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.commentDClose}
      />
    ];

    const styles = {
  dialogPad: {
    paddingTop: 2,
  },
};

    


  
  if (this.props.yell.requested && this.props.yell.requested.length>0) {
    joiningLabel = 'joining' + ' (' + this.props.yell.requested.length + ')'
   requests  =  <Requerers requests={this.props.yell.requested} ownership={ownership} />
  } else {
    joiningLabel = 'joining'
    requests ="no request"
  }

this.props.yell.comment_quantity >0
  ?
  commentsLabel=`comments (${this.props.yell.comment_quantity}) `
  :
  commentsLabel ="comments"
    return (
      <div>
       <Dialog
            title="People who want to join"
            actions={actionsForJoining}
            modal={false}
            open={this.state.joiningD}
            onRequestClose={this.joiningDClose}
            autoScrollBodyContent={true}
            className="dialog"
                >
          {requests}
        </Dialog>

          <Dialog
                title="Comments"
                actions={actionsforComments}
                modal={false}
                open={this.state.commentsD}
                onRequestClose={this.commentDClose}
                autoScrollBodyContent={true}
                className="dialog"
                    >
              <CommentsForm  yell_id={this.props.yell._id} />
              <CommentsOnMain  yell_id={this.props.yell._id} />
        </Dialog>

      <Card>
        <CardHeader
          title={this.props.yellOwner.username}
          subtitle="Subtitle"
          avatar="http://lorempixel.com/100/100/nature/"
        />

        <CardTitle title={this.props.yell.plan} subtitle="Card subtitle" />
        <CardText>
         {this.props.yell.plan}   {ownership}
        </CardText>
        <CardActions>
         <FlatButton label={joiningLabel}   onTouchTap={this.joiningDOpen} />
          <FlatButton label={commentsLabel} onTouchTap={this.commentDOpen} />
          <FlatButton label="Spread" />
        </CardActions>
      </Card>
     

          



</div>

)
  }
});



export default YellCard;