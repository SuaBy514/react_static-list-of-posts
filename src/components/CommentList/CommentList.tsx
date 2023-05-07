import React from 'react';
import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface CommentListProps {
  comments: Comment[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return comments.length
    ? (
      <div className="CommentList">
        {comments.map((comment) => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    );
};
