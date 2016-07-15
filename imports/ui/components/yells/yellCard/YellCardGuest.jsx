
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash'
import  {RequerersGuest} from '../../composers/yellCard/RequerersGuest.jsx'
import Dialog from 'material-ui/Dialog';
import CommentsForm from '../../comments/CommentsForm.jsx'
import {CommentsOnMain} from '../../composers/CommentsOnMain.jsx'

import emitter from '../YellEmitter.jsx'
export const YellCardGuest = React.createClass({
    getInitialState () {
      return  {
        joiningD:false,
        commentsD:false
    }
  },
  componentDidMount(){


  },

    

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
  	console.log(this.props.yell)

 emitter.addListener('join', this.joiningDOpen);

      

    const actionsForJoining =  <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.joiningDClose}
      />
  

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
   requests  =  <RequerersGuest requests={this.props.yell.requested}
                   yellId={this.props.yell._id} />
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
             
              <CommentsOnMain  yell_id={this.props.yell._id} />
        </Dialog>

      <Card>
        <CardHeader
          title={this.props.yell.owner.username}
          subtitle={ 'created at ' + moment(this.props.yell.created_at).startOf('hour').fromNow()}
          avatar="{this.props.yell.owner.profile.avatar}"
        />

      <CardTitle title={this.props.yell.plan} subtitle={moment(this.props.yell.date).calendar()}/>
        <CardText>
         {this.props.yell.desc}
        </CardText>
        <CardActions>
         <FlatButton label={joiningLabel}   onTouchTap={this.joiningDOpen} />
          <FlatButton label={commentsLabel} onTouchTap={this.commentDOpen} />
        </CardActions>
      </Card>

</div>

)
  }
});



export default YellCardGuest;
