import React, { useEffect, useRef } from "react";

const AddComment = ({currentImage, setCurrentImage, commentInput, setCommentInput,name, setName,submitComment, setSubmitComment, setComments, comments}) => {
  // Data
  const images = [
    {
      name: "juliusomo",
      image: "images/avatars/image-juliusomo.png",
    },
    {
      name: "amyrobson",
      image: "images/avatars/image-amyrobson.png",
    },
    {
      name: "maxblagun",
      image: "images/avatars/image-maxblagun.png",
    },
    {
      name: "ramsesmiron",
      image: "images/avatars/image-ramsesmiron.png",
    },
  ];

  // Functions
  const handleInput = (e) => {
    setCommentInput(e.target.value);
  };

  const handleSubmit = () => {
    const index = Math.floor(Math.random() * 4);
    setCurrentImage(images[index].image);
    setName(images[index].name);
    setSubmitComment(true)
    setComments([...comments, {
      img: currentImage,
      name: name,
      content: commentInput
    }])
    setCommentInput("")
  };

  const checkEnter = (e) =>{
    if(e.which === 13){
      e.preventDefault();
      handleSubmit()
    }
  }

  const inputRef =useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    });

  return (
    <>
      <div className='comment-input-card'>
        <div className='input-card-container'>
          <form>
            <img src={currentImage} alt='User' />
            <textarea
              onChange={handleInput}
              onKeyPress={checkEnter}
              value={commentInput}
              ref={inputRef}
              className='input-box'
              type='text'
              placeholder='Your reply...'></textarea>
            <button onClick={handleSubmit} type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddComment;
