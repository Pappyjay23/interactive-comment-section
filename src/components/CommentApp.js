import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommentSection from './CommentSection';
import AddComment from "./AddComment"
import "./Comment.css"

const CommentApp = () => {

    //States
    const [commentInput, setCommentInput] = useState("")

    const [currentImage, setCurrentImage] = useState("images/avatars/image-juliusomo.png")

    const [name, setName] = useState("juliusomo")

    const [submitComment, setSubmitComment] = useState(false)

    const [comments, setComments] = useState([])

  return (
    <>
        <h1 className='headline'>Chat Room</h1>
        <div className="chat-container">
            <Router>
                <Routes>
                    <Route path="/" element={<CommentSection name={name} currentImage={currentImage} commentInput={commentInput} submitComment={submitComment} comments={comments} />} />
                </Routes>
                    
                <AddComment commentInput={commentInput} setCommentInput={setCommentInput} currentImage={currentImage} setCurrentImage={setCurrentImage} name={name} setName={setName} submitComment={submitComment} setSubmitComment={setSubmitComment} setComments={setComments} comments={comments} />
            </Router>
        </div>
    </>
  )
};

export default CommentApp;
