import React from 'react';
import {MdDelete, MdEdit} from "react-icons/md"
import { Link } from 'react-router-dom';

const ReplyCard = () => {
  return (
    <div className="reply-container">
        <div className='reply-card'>
            <div className="card-container">
                <div className="card-details">
                    <div className="left-items">
                        <img src="images/avatars/image-amyrobson.png" alt="User" />
                        <p className="username">amyrobson</p>
                        <p className='response-time'>1 month ago</p>
                    </div>
                    <div className="right-items">
                        <Link to ="/" className='right-link'>
                            <div className="delete">
                                <MdDelete />
                                <span>Delete</span>
                            </div>
                        </Link>
                        <Link to = "/" className='right-link'>
                            <div className="edit">
                                <MdEdit />
                                <span>Edit</span>
                            </div>
                        </Link>
                        
                    </div>
                </div>
                <p className='card-desc'>Impressive, though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p>
            </div>
        </div>
    </div>
  )
  
};

export default ReplyCard;
