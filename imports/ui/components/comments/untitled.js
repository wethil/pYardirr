
/*
const renderIfData = ( yells ) => {

  const alerto = (e)=> {
    yell=  Session.get('yell');
    $('.active_card').removeClass('active_card');
      $('#'+yell).addClass('active_card');
      lat = Session.get('lat');
      lng = Session.get('lng');

  }

     if ( yells && yells.length > 0 ) {
    return yells.map( ( yell ) => {
      user = Meteor.users.findOne({_id:yell.owner})

      return (
  <div key={ yell._id } id={yell._id} className="ui fluid card"   >
        <div className="content">
         <img className="left rounded floated mini ui image" src={user.profile.profile_pic} />
         <div className="header">
          {user.username}
         </div>

          <div className="description">
             { yell.content }   lat = {yell.loc.coordinates[0]} long = {yell.loc.coordinates[1]}
          </div>
        </div>
       <div className="extra content">
               <span className="right floated">
                  <YellButtons yell={yell._id}  />
                  17 likes
               </span>
           3 <i className="comment icon"></i> Reply
           <button className="ui button"
              onClick={
                      () => {
                      Session.set('yell', yell._id)
                       PubSub.publish( 'location', [yell.loc.coordinates[0],yell.loc.coordinates[1]] );
                      Session.set('lat',yell.loc.coordinates[0])
                      Session.set('lng',yell.loc.coordinates[1])
                      alerto();

                    }}>
                b
            </button> <Link to={`/yells/${yell._id}`}>{yell._id}</Link>

    </div>
   </div>       );
    });
  } else {
    return <p>No list items yet!</p>;
  }
};

*/
