import React, { useState } from 'react';
import CommentCard from './CommentCard';

const CommentSection = ({comments, submitComment}) => {
  const [reply, setReply] = useState(false)
    const renderReply = () =>{
      setReply(true)
    }

  return (
    <div className='comment-section'>
        <div className="comment-section-container">
            {submitComment ? comments.map(comment =>{
                return(
                    <CommentCard name={comment.name} image={comment.img} desc={comment.content} key={Math.random()* 1000} renderReply={renderReply} reply={reply} />
                )                
            }) : null}
        </div>
    </div>
  )
};

export default CommentSection;
