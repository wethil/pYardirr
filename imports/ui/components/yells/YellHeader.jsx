import React, {Component} from 'react';

class YellHeader extends Component {
    render() {
         const { yell } = this.props;
        return (
            <div>
                <h1> {yell.content} </h1>
                <h1> {yell.owner} </h1>
            </div>
        );
    }
}

export default YellHeader;

YellHeader.propTypes = {
  yell: React.PropTypes.object,
};
