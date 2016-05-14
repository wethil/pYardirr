import React, {Component} from 'react';
import { Link } from 'react-router';
/*
class YellSingle extends Component {
    render() {
        return (
           <li>
		           <Link to={`/yells/${this.props.yells._id}`}>
		            {this.props.yells.content}  --> rating :
		            {this.props.yells.rating}
		           </Link>
        </li>
        );
    }
}

export default YellSingle;

*/

const renderIfData = ( yells ) => {
  if ( yells && yells.length > 0 ) {
    return yells.map( ( yell ) => {
      return <li> <Link to={`/yells/${yell._id}`} key={ yell._id }>{ yell.content }</Link> </li> ;
    });
  } else {
    return <p>No list items yet!</p>;
  }
};

export const YellSingle = ( { yells } ) => (
  <ul>{ renderIfData( yells ) }</ul>
);