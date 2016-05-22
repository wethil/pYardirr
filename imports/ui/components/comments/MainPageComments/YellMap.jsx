import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
export class YellMap extends Component {
	render() {
		 center = {lat: 35.117570900000004, lng: 33.9329868} 
		return (
			<div style={{width: '100%', height: 250}} >
					 <GoogleMap  bootstrapURLKeys={{
												    key: 'AIzaSyBMIojtxSm1FTXsbv_DzEqjWSCtqPpnnjo',
												    language: 'en'  }} 
									center={center} zoom={11}  >
							 <div className="place" lat={35.117570900000004} lng={33.9329868}>MyPlace</div>      
			      </GoogleMap>

			</div>
		);
	}
}

