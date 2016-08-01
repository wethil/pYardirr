import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export const ItemForm = React.createClass({
	getInitialState () {
		return {
			type:"",
			desc:"",
			tags:[],
			photo:"",
			quantity:"",
			price:""
		}
	},

	handleTypeChange(e) {
		this.setState({
			type:e.target.value
		})
	},
	handleDescChange(e) {
		this.setState({
			desc:e.target.value
		})
	},
	handleTagsChange(e) {
		//this.setState({})
	},
	handleQuantityChange(e){
		this.setState({
			quantity:e.target.value
		})
	},
	handlePriceChange(e) {
		this.setState({
			price:e.target.value
		})
	},
	handleSubmit(e) {
		e.preventDefault()	
		lat=35
		lng=35
		type=this.state.type
		desc=this.state.desc
		tags=this.state.tags
		photo=""
		ownerId=Meteor.userId()
		quantity=this.state.quantity
		price=this.state.price
		Meteor.call('addItem',lat,lng,type,desc,tags,photo,ownerId,quantity,error =>{
			if (error) {
				console.log(error)
			} else {
				this.setState({
						type:"",
						desc:"",
						tags:[],
						photo:"",
						quantity:"",
						price:""
				})
			}
		})
	},
	render() {
		const styles={
			drwPadd : {
				paddingLeft:10
			}
		}
		return (
			<div style={styles.drwPadd} >
			 	<TextField 
			 		value={this.state.type}
					floatingLabelText="Write basicially what is it"
					floatingLabelFixed={true}
					onChange={this.handleTypeChange}
			 		hintText="e.g:bicycle"/> 
			 	<TextField
			 		value={this.state.desc} 
			 		onChange={this.handleDescChange}
					floatingLabelText="Write description"
					floatingLabelFixed={true}
					inputStyle={{	fontSize:12}}
			 		hintText="e.g:really fast, confortable"/> 
			 	<TextField 
			 		value={this.state.tags}
			 		onChange={this.handleTagsChange}
					floatingLabelText="What is it for?"
					floatingLabelFixed={true}
					inputStyle={{	fontSize:12}}
			 		hintText="#ridingbike #doingsport"/> 	
			 	 <div className="ui two column grid " style={{marginRight:0}} >
	                <div className="column">
	                    <TextField 
	                    	value={this.state.quantity}
	                    	onChange={this.handleQuantityChange}
							floatingLabelText="Quantity"
							floatingLabelFixed={true}
							 style={{width :98}}
					 		hintText="1"/> 		
	                  </div>
	                <div className="column">
	                      <TextField 
	                      	value={this.state.price}
	                      	onChange={this.handlePriceChange}
							floatingLabelText="Price"
							floatingLabelFixed={true}
							style={{width:98}}
					 		hintText="$10"/> 		
	                </div>
	            </div>
	            	    <RaisedButton
			                 onMouseDown={this.handleSubmit}
			                  label="Post" primary={true}/>

			</div>
		);
	}
});



