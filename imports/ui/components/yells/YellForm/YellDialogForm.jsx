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
import Chance from 'chance'


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
        place:'',
        firstStep:"",
        secondStep:"hidden",
        genLocLat:"",
        genLocLng:""



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
componentWillMount(){

},

  handlePrev ()  {
  this.setState({ firstStep:"", secondStep:"hidden" })
  },


//value 0 came from "custom" section
handleSelectChange  (event,value)  {
  var chance = new Chance();
      randomLoc=  chance.coordinates().split(",")
      console.log(randomLoc);
      lat=  parseFloat(randomLoc[0])
      lng = parseFloat(randomLoc[1])
      this.setState({
        genLocLat:lat,
        genLocLng:lng
      })

  console.log(value);

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
      this.setState({value})
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
  this.setState({ firstStep:"hidden", secondStep:"" })
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
    handleValueChange (e) {
        this.setState({
          value:e.target.value
        })
    },


     handleTimeChange (e,time)  {
        this.setState({
            time: time
        });

    },handleSubmit(e){
    	e.preventDefault()

    	plan= this.state.value
    	desc = this.state.desc
    	owner = Meteor.userId();
        emitter.emit('close')
    	if (this.state.extra=="hidden") {
        lat = this.state.genLocLat
        lng =this.state.genLocLat
            console.log(lat);
            console.log(lng);

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
                          place:'',
                          firstStep:"",
                          secondStep:"hidden"
                        })

    					      };

    				});

    	} else {
        lat = Session.get('lat');
      	lng = Session.get('lng');
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
                            place:'',
                            firstStep:"",
                            secondStep:"hidden"
                          })


    	              }

    	          });
    	    }

    },

	render() {
    console.log(this.state.genLocLat);
    console.log(this.state.genLocLng);


		const styles = {
		  customWidth: {
		    width: 256,
		  },
		  drwPadd : {
		  	paddingLeft:10
		  },
		  textArea:{
		  	fontSize:12
		  },
		  datePicker:{
		  	width :141
		  },
		  timePicker:{
		  	width:98
		  },
      labelStyle:{
        fontSize:11,
        margin:1
      }

		};
	plans=this.props.plans
  const stepIndex = this.state.stepIndex;



		return (
			 <div style={styles.drwPadd} >
         <div className={this.state.firstStep}>
             <Menu
                  onChange={this.handleSelectChange}
                  listStyle={{cursor:'pointer'}}>
                    <MenuItem
                    value={0}
                    primaryText="Custom"
                      />
                  {plans.map(function(plan) {
                        return <MenuItem key={plan._id} value={plan.content} primaryText={plan.content} />;
                      })}
                </Menu>
          </div>
        <div className={this.state.secondStep}>
                <div className={this.state.hiddenClass}>
                  <TextField
                    hintText="Write your plan"
                    inputStyle={{	fontSize:12}}
                    multiLine={true}
                    onChange={this.handleValueChange}
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
                    { this.state.extra=='hidden'? <p style={styles.labelStyle} > *Will occur on map randomly </p> : ""  }
              </div>

            <div className={this.state.extra}>
              <div>
                <TextField //location autocomplete
                 onChange={this.handlePlaceChange}
                inputStyle={{fontSize:12}}
                id="places"
                  />
                <p style={styles.labelStyle}> *Selected place will occur on map </p>
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
                  onTouchTap={this.handlePrev}

                />
                 <RaisedButton
                 onMouseDown={this.handleSubmit}
                  label="Post" primary={true}/>
              </div>
          </div>
        </div>
		);
	}
});
