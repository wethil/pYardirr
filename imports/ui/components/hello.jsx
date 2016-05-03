
import React, {Component} from 'react';

class Hello extends Component {
  
    componentDidMount() {
  
     
      name= this.props.params.name
    
    console.log(name);
  }

  
  render() {
    return (
      <div>
        hello {name}
      </div>
    );
  }
}

export default Hello;



