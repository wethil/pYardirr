import React, {Component} from 'react';
import { Link } from 'react-router';

const renderIfData = ( yells ) => {
  if ( yells && yells.length > 0 ) {
    return yells.map( ( yell ) => {
      return <li key={ yell._id } > <Link to={`/yells/${yell._id}`} >{ yell.content }</Link> </li> ;
    });
  } else {
    return <p>No list items yet!</p>;
  }
};

export const YellSingle = ( { yells } ) => (
  <ul>{ renderIfData( yells ) }</ul>
);