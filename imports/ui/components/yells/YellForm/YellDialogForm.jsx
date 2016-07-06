import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import _ from 'lodash';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';


export const YellDialogForm = React.createClass({	   	
  getInitialState () {
  	now = new Date()
    return  {
        openOnFocus : true,
        hiddenClass : 'hidden',
        selectLabel : 'What you will do with that people?',
        selectHint	: '#somethinginteresing',
        api : 0,
        value : '',
        extra : '',
        desc:'',
        date:now,
        time:'',
        place:''


    };
  },
  componentDidMount() {
			var input = document.getElementById('places');
			var autocomplete = new google.maps.places.Autocomplete(input);
			google.maps.event.addListener(autocomplete, 'place_changed', function() {
					var place = autocomplete.getPlace();
					myLatLng = place.geometry.location
					var lat = myLatLng.lat();
					var lng = myLatLng.lng();			
					Session.set('lat',lat)
					Session.set('lng',lng)

					Session.set('place_id', place.place_id);
					Session.set('place', place.formatted_address);
			});

},


handleSelectChange  (event, index, value) {
	this.setState({value})
	if (value==0) {
			this.setState({
			hiddenClass:"",
			selectLabel : 'What you plan to do?',
			selectHint	: '#somethinginteresing'     
			})
		
		$("#places").attr("placeholder", "Enter a location for that").val("").focus().blur();

	} else {

		chPlan = _.find(this.props.plans,{'content':value})
		if (chPlan.needExtra==false) {
			this.setState({extra:'hidden'})
		} else {
			this.setState({extra:''})
		}

		this.setState({
		hiddenClass:'hidden',
		selectLabel : chPlan.label,
		selectHint	: chPlan.hint 
		})
		$("#places").attr("placeholder", 'Where do you want to ' + value + '?').val("").focus().blur();
	}   

},
  

   handleDescChange (e)  {
        this.setState({
            desc: e.target.value
        });
     
    },
    handlePlaceChange (e)  {
     var place = $('#places').val();
     
    },

       handleDateChange (e,date)  {
        this.setState({
            date: date
        });
      
    },  
     handleTimeChange (e,time)  {
        this.setState({
            time: time
        });
       
    },handleSubmit(e){
    	e.preventDefault()
    	lat = Session.get('lat');
    	lng = Session.get('lng');
    	plan= this.state.value
    	desc = this.state.desc
    	preDate = this.state.date
    	time = this.state.time
    	place = $('#places').val();
    	owner = Meteor.userId();
		hours =moment(time).hours();
		minute =moment(time).minutes();
		date=moment(preDate).hours(hours).minutes(minute).format()
		console.log(date)
    	console.log(`${plan} ${desc} ${date} ${time} ${place}  lat :${lat} lng: ${lng}  `)
    	
    	   Meteor.call('addYell',lat,lng,plan,desc,date,time,place,owner, error => { 
            if (error) { 
                console.log('error', error); 
            } 
             console.log('yell added ' );  
                      
        });
  

    },

	render() {

	const minDate = new Date();



		const styles = {
		  customWidth: {
		    width: 256,
		  },
		  drwPadd : {
		  	paddingLeft:20
		  },
		  locationArea:{
		  	fontSize:12
		  },
		  datePicker:{
		  	width :141
		  },
		  timePicker:{
		  	width:98
		  }

		};
	plans=this.props.plans
		
		return (
					 <div style={styles.drwPadd} >
		
		 <SelectField value={this.state.value}
		   style={styles.customWidth}
		  onChange={this.handleSelectChange}
		  floatingLabelText="You need someone to.."
		  floatingLabelFixed={true}
		   hintText="Choose From List">	  		
		  		<MenuItem 
		  		value={0} 
		  		primaryText="Custom" />	
				
				{plans.map(function(plan) {
		          return <MenuItem key={plan._id} value={plan.content} primaryText={plan.content} />;
		        })}
        
        </SelectField>
     

	       
        <div className={this.state.hiddenClass}>
	        <TextField 
			      hintText="Write your custom person request"
			      value={this.state.value}
			    />
		</div>	
			
			<div className="className">
				 <TextField
				 		  value={this.state.desc}
				 		  onChange={this.handleDescChange}
				 		  multiLine={true}
					      hintText={`e.g.: ${this.state.selectHint}`}
					      floatingLabelText={this.state.selectLabel}
					      floatingLabelFixed={true}
					    />
			</div>
			
		<div className={this.state.extra}>
			<div>
				<TextField 
				 onChange={this.handlePlaceChange}
				inputStyle={styles.locationArea}
				id="places"
			    />
			    {this.state.place}
			</div>
			<div className="ui two column grid ">
				<div className="column">
					 <DatePicker 
					 defaultDate={this.state.date}
					 onChange={this.handleDateChange}	
					 textFieldStyle={styles.datePicker} 
					 minDate = {minDate}
					 hintText="Date" />
				</div>
				<div className="column">
					    <TimePicker
					    onChange={this.handleTimeChange}	
					     textFieldStyle={styles.timePicker}
					      format="24hr"
					      hintText="Time"
					    />
				</div>
			</div>
		</div>	
			<div className="">
				 <RaisedButton
				 onMouseDown={this.handleSubmit}
				  label="Primary" primary={true}/>
			</div>

	</div>
		);
	}
});



   

    /*
    <div>
		
		 <SelectField value={this.state.value}
		   style={styles.customWidth}
		  onChange={this.handleChange}
		  floatingLabelText="You need someone to.."
		  floatingLabelFixed={true}
		   hintText="Choose From List">

		  		
		  		<MenuItem 
		  		value={0} 
		  		primaryText="Custom" />	
				
				{plans.map(function(plan) {
		          return <MenuItem key={plan._id} value={plan.content} primaryText={plan.content} />;
		        })}
        
        </SelectField>
     
        {this.state.value}
	       
        <div className={this.state.hiddenClass}>
	        <TextField 
			      hintText="Write your custom person request"
			    />
		</div>	
			
			<div className="className">
				 <TextField
				 		  multiLine={true}
					      hintText={`e.g.: ${this.state.selectHint}`}
					      floatingLabelText={this.state.selectLabel}
					      floatingLabelFixed={true}
					    />
			</div>
			<div className="ui action input">
				  <input type="text" id="places" placeholder="Search..." />
				  <button class="ui button">Search</button>
			</div>
	</div>
*/            

