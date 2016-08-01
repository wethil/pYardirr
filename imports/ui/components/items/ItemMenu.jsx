import React from 'react';
import emitter from '../yells/YellEmitter.jsx'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import {ItemForm} from './ItemForm.jsx'
export const ItemMenu = React.createClass({
	getInitialState(){
		return {
			open:false
		}
	},
	render() {
		  const styles = {
      drawer: {
        zIndex: 2
        },
      content: {
        fontSize: 11
        }
    }

		emitter.addListener('openItemDrawer', ()=>{
			this.setState({
				open: !this.state.open
			})
		})
		return (
		 <Drawer  
		          docked={false}
		          width={285}
		          openSecondary={true}
		          open={this.state.open}
		          onRequestChange={(open) => this.setState({open})}>
	          <AppBar 
				title="Items"
				iconElementLeft={
					<IconButton
					onMouseDown={()=>this.setState({open:false})}>
					<NavigationClose /></IconButton>}
					/>
         	 <ItemForm />
        </Drawer>
		);
	}
});


