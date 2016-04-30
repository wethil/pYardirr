import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import YellWrapper from './YellWrapper'


class YellForm extends Component {
    getlocation (){
     
    }
    handleClick(e) {
       e.preventDefault();
      if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position) {
        Session.set('lat', position.coords.latitude);
        Session.set('lon', position.coords.longitude);
        console.log(' latitude ' + position.coords.latitude); 
         console.log(' longtitude ' + position.coords.longitude); 
    });
    } else {   
       console.log('error on location');
    }
        
}
    addYell(event) {
        event.preventDefault();
         var yell = this.refs.mYell.value.trim();
         var lat = Session.get('lat')
         var long = Session.get('lon')
         
        //lat long
       
        Meteor.call('addYell', yell,lat,long, error => { 
            if (error) { 
                console.log('error', error); 
            } 
             console.log('yell added ' );  
            this.refs.mYell.value="";
                      
        });
        
    }
    
 
    
    render() {
        return (
            <div>
            <button onClick={this.handleClick} >sdfd </button>
                   <form className="commentForm" onSubmit={this.addYell.bind(this)} > 
                        <input
                            type="text"
                            ref="mYell"
                            placeholder="yell something!"
                        />
                </form>
                <YellWrapper />
           </div> 
        );
    }
}

export default YellForm;