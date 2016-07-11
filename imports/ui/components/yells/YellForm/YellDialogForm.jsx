import React from 'react';
import SelectField from 'material-ui/SelectField';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import _ from 'lodash';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import emitter from '../YellEmitter.jsx'


export const YellDialogForm = React.createClass({
  getInitialState () {
  	now = new Date()
    return  {
        stepIndex: 0,
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

  handleNext  ()  {
    if (this.state.stepIndex < 2) {
      this.setState({stepIndex: this.state.stepIndex + 1});
    }
  },
  handlePrev ()  {
    if (this.state.stepIndex > 0) {
      this.setState({stepIndex: this.state.stepIndex - 1});
    }
  },
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Menu

              onChange={this.handleSelectChange}
              >
                 <MenuItem
                 value={0}
                 primaryText="Custom"
                   />
               {plans.map(function(plan) {
                     return <MenuItem key={plan._id} value={plan.content} primaryText={plan.content} />;
                   })}
             </Menu>
        );
      case 1:
        return (
          <div>
                <div className={this.state.hiddenClass}>
        	        <TextField
        			      hintText="Write your plan"
        			      inputStyle={{	fontSize:12}}
        			      multiLine={true}
        			      onChange={this.handleDescChange}
        			      value={this.state.desc}
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
        				inputStyle={{fontSize:12}}
        				id="places"
        			    />
        			    {this.state.place}
        			</div>
        			<div className="ui two column grid ">
        				<div className="column">
        					 <DatePicker
        					 defaultDate={this.state.date}
        					 onChange={this.handleDateChange}
        					 textFieldStyle={{	width :141}}
        					 minDate = { new Date()}
        					 hintText="Date" />
        				</div>
        				<div className="column">
        					    <TimePicker
        					    onChange={this.handleTimeChange}
        					     textFieldStyle={	{width:98}}
        					      format="24hr"
        					      hintText="Time"
        					    />
        				</div>
        			</div>
        		</div>
        			<div className="">
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}

                />
        				 <RaisedButton
        				 onMouseDown={this.handleSubmit}
        				  label="Primary" primary={true}/>
        			</div>

            </div>);
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  },


//value 0 came from "custom" section
handleSelectChange  (event,value)  {
  console.log(value);
	this.setState({value})
	if (value==0) {
			this.setState({
			hiddenClass:"",
      selectLabel:'Write any of your need',
			selectHint	: '#somethingcool'
			})

		$("#places").attr("placeholder", "Enter a location for that").val("").focus().blur();

	} else {
		//chPlan = chosen plan
		chPlan = _.find(this.props.plans,{'content':value})
    console.log(chPlan);
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
  this.handleNext()
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
    	lat = 33 //Session.get('lat');
    	lng = 33 //Session.get('lng');
    	plan= this.state.value
    	desc = this.state.desc
    	owner = Meteor.userId();
        emitter.emit('close')
    	if (this.state.extra=="hidden") {
    				Meteor.call('addBasicYell',lat,lng,plan,desc,owner, error => {
    					if (error) {
    					console.log('error', error);
    				} else {
            						console.log('yell added ' )
                        this.setState({
                          stepIndex:0,
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
                        })

    					      };

    				});

    	} else {
    			time = this.state.time
    			preDate = this.state.date
    			place = $('#places').val();
    			hours =moment(time).hours();
				minute =moment(time).minutes();
				date=moment(preDate).hours(hours).minutes(minute).format()

    			Meteor.call('addYell',lat,lng,plan,desc,date,time,place,owner, error => {
    	              if (error) {
    	                  console.log('error', error);
    	              } else {

          				        this.setState({
                            stepIndex:0,
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
                          })


    	              }

    	          });
    	    }

    },

	render() {


		const styles = {
		  customWidth: {
		    width: 256,
		  },
		  drwPadd : {
		  	paddingLeft:20
		  },
		  textArea:{
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
  const stepIndex = this.state.stepIndex;
  const contentStyle = {margin: '0 16px'};


		return (
			 <div style={styles.drwPadd} >
         <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
           <div style={contentStyle}>
             {this.getStepContent(stepIndex)}

           </div>
         </div>


	</div>
		);
	}
});
