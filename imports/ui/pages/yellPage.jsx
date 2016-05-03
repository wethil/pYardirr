import React from 'react';

export const Hellow = ( { params, location } ) => (
  <h3>Howdy, { params.name }! You like { location.query.food }.</h3>
);