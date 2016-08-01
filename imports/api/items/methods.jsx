import { Meteor } from 'meteor/meteor';
import Items from './items.js'

Meteor.methods({
	addItem:function(lat,lng,type,desc,tags,photo,ownerId,quantity){
		Items.insert({
			itemType:type,
			itemDesc:desc,
			itemTags:tags,
			itemPhoto:photo,
			ownerId:ownerId,
			created_at:new Date(),
			quantity:quantity,
			 loc: {
                type: "Point",
                coordinates : [lat,lng]
            }
		})
	}
})