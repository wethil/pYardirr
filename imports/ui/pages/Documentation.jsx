import React from 'react';


export  const Documentation = React.createClass({
	
	
	render() {
		return (
			<div className="ui main container" >
				 User login api : 
                <ul> 
                <li> /api/login --  /api/logout  -->   <a href="https://github.com/kahmali/meteor-restivus#authenticating "> documentation </a>  </li> <br/>
                 <li> diğer end pointler  --> <a href="https://github.com/kahmali/meteor-restivus#users-collection-endpoints"> other endpoints</a> </li>
                 </ul>

            <ul>
            <li>!! normal çekersen yeniden eskiye göre, sonuna &mod=trend eklersen ratingi en yüksekten düşük olana göre çekiyor.</li>
            <li>/api/yells/new json request olacak. ctrl-m yapınca gelen konsolda json örneği var </li>
            <li>/api/yell/fetch?lat=&lng=&max=</li>
            <li>/api/yell/fetch?lat=&lng=</li>
           
            </ul>
			</div>
		);
	}
});
