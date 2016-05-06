import React, {Component} from 'react';
import YellHeader from '../components/yells/YellHeader.jsx'
import Message from '../components/Message.jsx'
import NotFound from '../components/NotFound.jsx'
import CommentSingle from '../components/comments/CommentSingle.jsx'

class YellPage extends Component {
    render() {
        const { yell, yellExists, loading, comments } = this.props;
        
        
    if (!yellExists) {
      return <NotFound/>;
    }

    let Comments;
    if (!comments || !comments.length) {
      Comments = (
        <Message
          title="No comments here"
          subtitle="Add new comments using the field above"
        />
      );
    } else {
      Comments = comments.map(todo => (
        <Comments
          comments={comment}
          key={comment._id}
        />
 ));
    }
        
        return (
            <div>
                   <YellHeader yell={yell}/>
            </div>
        );
    }
}

export default YellPage;

YellPage.propTypes = {
  yell: React.PropTypes.object,
  comment: React.PropTypes.array,
  loading: React.PropTypes.bool,
  yellExists: React.PropTypes.bool,
};