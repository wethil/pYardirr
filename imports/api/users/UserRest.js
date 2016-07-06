import Api from '../rest.js'
import { Meteor } from 'meteor/meteor';


Api.addCollection(Meteor.users);

Api.addRoute('signin',{autRequired:false},{
	post : function () {
	console.log('email : ' +this.bodyParams.email)

	if (this.bodyParams.email) {
		key = 'email'
		value = this.bodyParams.email
	} else {
		key = 'username'
		value = this.bodyParams.username
	}
		//http call for login
	
   response= HTTP.call( 'POST', 'http://192.168.1.4:3000/api/login', {
				  data: {
				   [key] : value,
				   password :  this.bodyParams.password
				  }
				});

	if (response.data.data.userId) {
		 user = Meteor.users.findOne({"_id" : response.data.data.userId }); 
		    console.log(user._id + ' ' + user.username  )
		   delete user.services
		   delete user.emails
		   delete user.profile
		    user.authToken = response.data.data.authToken
		    res = user
		} else {
			res = "wrong information"
		}
//http call end

		
		return res
	}
})

// TO DO :make it more validate

Api.addRoute('check',{authRequired:true},{
	get : function () {
		

//http cazll end

		
		return 'asd'
	}
})