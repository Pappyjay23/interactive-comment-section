import React from 'react';
import {FaReply} from "react-icons/fa"
import { Link } from 'react-router-dom';
import AddReply from './AddReply';

const CommentCard = ({name, image, desc, renderReply, children, reply}) => {
    const count = Math.floor(Math.random()*10)

    
  return (
    <>
        <div className='comment-card' >
            <div className="card-container">
                <div className="card-details">
                    <div className="left-items">
                        <img src={image} alt="User" />
                        <p className="username">{name}</p>
                        <p className='response-time'>{count} minute ago</p>
                    </div>
                    <div className="right-items">
                        <Link onClick={renderReply} to ="/" className='right-link'>
                            <FaReply />
                            <span className='reply'>Reply</span>
                        </Link>
                    </div>
                </div>
                <p className='card-desc'>{desc}</p>
            </div>
        </div>
        {reply ? <AddReply /> : null}
        
    </>
  )
  
};

export default CommentCard;
