/*
const renderIfData = ( yells,users) => {

  const alerto = (e)=> {
    yell=  Session.get('yell');
    $("." + yell).removeClass("hidden");
     $('.card-5').removeClass('card-5');
     $('#'+yell).addClass('card-5');
      lat = Session.get('lat');
      lng = Session.get('lng');
   
  }

     if ( yells && yells.length > 0 ) {
    return yells.map( ( yell ) => {

      user = Meteor.users.findOne({_id:yell.owner})
      currentUser = Meteor.users.findOne({_id:Meteor.userId()});
    
      if (yell.original_yell_id) {
        spreaded =  <Link to={`/yells/${yell.original_yell_id}`}><i className="fa fa-angle-down"></i></Link>
      } else {
        spreaded =""
      }

   
      if (currentUser.profile.paws.indexOf(yell._id)>=0) {
        pawed = <YellUnPawButton yellId={yell._id} />
      } else {
        pawed = <YellPawButton yellId={yell._id} /> 
      }
     

      
   
      var hiddenComments = ` animated fadeIn hidden  commentPad ${yell._id}`
      return (
 //Column Starting

    <div className="box text"  key={ yell._id } id={yell._id} >
        <div className="box-header">
          <h3><a href=""><img src={user.profile.profile_pic} alt="" />{user.username}</a>
            <span>March 21,18:45pm</span>
          </h3>
          <span>
              <i className="fa fa-map-marker" onClick={()=>{
                 PubSub.publish( 'location', [yell.loc.coordinates[0],yell.loc.coordinates[1]] );
              }} >
              </i>
             <Link to={`/yells/${yell._id}`}><i className="fa fa-angle-down"></i></Link>
         </span>
          <div className="window"></div>
        </div>
        <div className="box-content">
          <div className="content">
            <p className="yellcont" > {spreaded} { yell.content } </p>
          </div>
        </div>
      
        <div className="box-buttons">
        <div className="row">
           <SpreadButton yell={yell} /> 
            <button  className="comments" onClick={ 
                      () => { 
                      Session.set('yell', yell._id) 
                       PubSub.publish( 'location', [yell.loc.coordinates[0],yell.loc.coordinates[1]] );
                      Session.set('lat',yell.loc.coordinates[0])
                      Session.set('lng',yell.loc.coordinates[1])
                     
                      alerto();

                    }} > <CommentIcon count={7} />   </button>
               {pawed}
          </div>
        </div>
         <div className={hiddenComments}> 
            <CommentsOnMain yellId={yell._id} />
            <CommentsForm yell_id={yell._id} />
         </div>
           
   </div>
 
 
  

  //Column ending


      );
   



    });
  } else {
    return <p>No list items yet!</p>;
  }
};


export const YellSingle = ( { yells,users } ) => (


<div className="yellcolumn" >
     { renderIfData( yells,users ) }  
</div> 
);

*/