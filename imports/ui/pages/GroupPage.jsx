import React from 'react';
import {GroupYellForm} from '../components/groups/gYells/GroupYellForm.jsx'

export  const GroupPage = React.createClass({
	componentWillMount () {
			group_id = this.props.params.grId
		},
	
	render() {
		return (
			<div>
				group is : {group_id}
				<GroupYellForm group_id={group_id} />
			</div>
		);
	}
});
