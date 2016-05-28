import Groups from '../api/groups/groups.js'
import Yells from '../api/yells/yells.js'
import Comments from '../api/comments/comments.js'
import  '../api/yells/methods.jsx'
import  '../api/groups/methods.jsx'
import  '../api/comments/methods.jsx'
import { Meteor } from 'meteor/meteor';
Yells.helpers({
  author(){
    return Meteor.users.findOne({_id:this.owner})
  }
})

Comments.helpers({
  yell(){
    return Yells.findOne({_id:this.yell_id})
  }
})


