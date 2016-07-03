import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import PubSub from 'pubsub-js'


//35.116167, 33.933192  // x:155781.39634346665  y:103731.33084750864

//35.119013, 33.930188  // x:155779.2088974222 	 y:103728.79727540394

//35.117632, 33.928123



export class YellTMap extends Component {
	 constructor(props) {
        super(props);

        this.state = {
            bounds: [],
            coordinates: props.coordinates,
            center : [35.116167,33.933192],
		    lat : 35.116167,
			lng : 33.933192,
			zoom: props.zoom,
            googleApiLoaded: false
        };
    }
	
	render() {
	
		center = this.state.center
		lat = this.state.lat
		lng = this.state.lng
		return (
			 <div style={{width: '100%', height: 250}} >
			 			 <GoogleMap
							onBoundsChange={this.onBoundsChange.bind(this)}
							onGoogleApiLoaded={this.onGoogleApiLoaded.bind(this)}
							yesIWantToUseGoogleMapApiInternals 
							bootstrapURLKeys={{
									key: 'AIzaSyBMIojtxSm1FTXsbv_DzEqjWSCtqPpnnjo',
									language: 'en'  }} 
							center={center} zoom={13}
							 options={this.props.options}>
							
								<div className="place" lat={lat} lng={lng}>Yell</div>
								<div className="place" lat={35.119013} lng={33.930188}>Yell</div>	

								<svg height="210" width="500">
									  <line x1="155781.39634346665" y1="103731.33084750864" x2="155779.2088974222 " y2="103728.79727540394" style="stroke:rgb(255,0,0);stroke-width:2" />
									  
									</svg>
							
			      </GoogleMap>
			     
			 </div>
		);
	}


	  onBoundsChange(center, zoom, bounds, marginBounds) {
        this.setState({
            zoom: zoom,
            bounds: bounds,
            center: center
        });
    }

    onGoogleApiLoaded({map, maps}) {
        this.setState({
            googleApiLoaded: true
        });

        const bounds = new maps.LatLngBounds();

        function extendBounds(lat, lng) {
            const latLng = new maps.LatLng(lat, lng);
            bounds.extend(latLng);
        }
        function extendCoordsBounds(coords) {
            for (var i = 0; i < coords.length; i++) {
                if (coords[i].hasOwnProperty('lat') && coords[i].hasOwnProperty('lng')) {
                    extendBounds(coords[i].lat, coords[i].lng);
                } else if (Array.isArray(coords[i])) {
                    extendCoordsBounds(coords[i]);
                }
            }
        }

        extendCoordsBounds(this.state.coordinates.coords);

        map.fitBounds(bounds);
    }
}

