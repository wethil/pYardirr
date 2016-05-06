import { Meteor } from 'meteor/meteor';
import '../../yells/yells.js'
import '../comments.js'


Meteor.publishComposite('comments.inYell', function commentsInYell(yell_id) {
  new SimpleSchema({
    yell_id: { type: String },
  }).validate({ yell_id });

  const owner = this.owner;

  return {
    find() {
      const query = {
        _id: yell_id,
        $or: [{ owner: { $exists: false } }, { owner }],
      };

      // We only need the _id field in this query, since it's only
      // used to drive the child queries to get the comments
      const options = {
        fields: { _id: 1 },
      };

      return Yells.find(query, options);
    },

    children: [{
      find(yell) {
        return Comments.find({ yell_id: yell._id });
      },
    }],
  };
});