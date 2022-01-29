import React from 'react';

const AddReply = () => {
  return (
    <div className="reply-container">
      <div className='reply-input-card'>
          <div className="input-card-container">
              <form>
                  <img src="images/avatars/image-juliusomo.png" alt="User" />
                  <textarea className='input-box' type="text" placeholder='Your reply...'/>
                  <button type='submit'>Reply</button>
              </form>
          </div>
        </div>
    </div>
  )
};

export default AddReply;
