

const renderIfData = ( yells ) => {
  if ( yells && yells.length > 0 ) {
    return yells.map( ( yell ) => {
      return (
  <div key={ yell._id }  className="item"   >
        <div className="ui tiny circular image">
          <img src="http://semantic-ui.com/images/avatar/large/stevie.jpg" />
        </div>
        <div className="content">
         <div className="header">{yell.owner_username}</div>
            
          <div className="description">
            <p> { yell.content }  </p>
          </div>
        </div>
      </div>        );
    });
  } else {
    return <p>No list items yet!</p>;
  }
};

export const YellSingle = ( { yells } ) => (
<div className="ui segment">
  <h3 class="ui block header">
      Yells at your location 
    </h3>
  <div className="ui  items">
     { renderIfData( yells ) }  
  </div>
</div>  
);

//to={`/yells/${yell._id}`}


