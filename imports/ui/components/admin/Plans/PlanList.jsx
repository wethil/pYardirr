import React, {Component} from 'react';



const renderIfData = ( plans ) => {
  if ( plans && plans.length > 0 ) {
    return plans.map( ( plan ) => {
      return  ( <li key={ plan._id } > I need someone to  { plan.content } {plan.timeConnective} 17:30 {plan.placeConnective} desc:  {plan.label} hint: {plan.hint}  </li> ) ;
    });
  } else {
    return ( <p>No list items yet!</p> ) ;
  }
};

export const PlanList = ( { plans } ) => (
  <ul>{ renderIfData( plans ) }</ul>
);

