import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import PubSub from 'pubsub-js'
export  const YellMap  = React.createClass({
	componentWillMount() {
    
 token = PubSub.subscribe( 'location',  ( msg, data) =>{
        console.log(msg)
        console.log(data)
        
         this.setState({center:data})
          this.setState({lat:data[0]})
          this.setState({lng:data [1]})
        

    });
},
	getInitialState () {
		return	{
				center : [39.479989,-88.175418],
				lat : 39.479989,
				lng : -88.175418
						
		};
	},
	
	render() {
		  var rows = [];
		center = this.state.center
		lat = this.state.lat
		lng = this.state.lng
	 this.props.comments.forEach(function(comment) {
      rows.push(<div className="place" key={comment._id} lat={comment.loc.coordinates[0]} lng={comment.loc.coordinates[1]}>Comment</div>);
      
    });
		return (
			 <div style={{width: '100%', height: 250}} >
			 			 <GoogleMap  bootstrapURLKeys={{
												    key: 'AIzaSyBMIojtxSm1FTXsbv_DzEqjWSCtqPpnnjo',
												    language: 'en'  }} 
									center={center} zoom={13}  >
								<div className="place" lat={lat} lng={lng}>Yeelllll</div>	
							{rows}     
			      </GoogleMap>
			     
			 </div>
		);
	}
})


//35.116167, 33.933192

//35.119013, 33.930188

//35.117632, 33.928123

