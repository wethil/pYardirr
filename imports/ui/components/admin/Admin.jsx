import React from 'react';
import {PlanComposer} from '../composers/admin/PlanComposer.jsx'
import {PlanForm} from './Plans/PlanForm.jsx'
export const Admin = React.createClass({
	render() {
		return (
			<div className="ui container">
				<div className="ui grid">
					<div className="four wide column">
						<PlanForm />
					</div>
				    <div className="twelve wide column">
				    	<PlanComposer />
				    </div>
				</div>
		</div>	
		);
	}
});
