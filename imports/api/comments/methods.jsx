import { Meteor } from 'meteor/meteor';
import Comments from './comments.js'

Meteor.methods({
	addComment : function (comment_content,yell_id) {
		Comments.insert({
			content: comment_content,
			yell_id: yell_id,
			created_at : new Date()
		})
	}
})

Meteor.methods({
	pawComment : function (id) {
		Comments.update({_id:id},{$inc:{ rating:1 }})
	} 
})

Meteor.methods({
	likeComment : function (id) {
		Comments.update({_id:id},{$inc:{ rating:1 }})
	} 
})