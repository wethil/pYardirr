import { Meteor } from 'meteor/meteor';
import { Yells } from '../../api/yells/yells.js';
import { createContainer } from 'meteor/react-meteor-data';
import YellPage from '../pages/YellPage.jsx';

export default createContainer(({ params: { id } }) => {
  const yellsHandle = Meteor.subscribe('comments.inYell', id);
  const loading = !yellsHandle.ready();
  const yell = Yells.findOne(id);
  const yellExists = !loading && !!yells;
  return {
    loading,
    yell,
    yellExists,
    comments: yellExists ? yell.comments().fetch() : [],
  };
}, YellPage);