import React, { useState } from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import like2 from '../../assets/like2.png';
import dislike from '../../assets/dislike.png';
import dislike2 from '../../assets/dislike2.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import nature from '../../assets/nature.jpeg';
import user_profile from '../../assets/user_profile.jpg';

const PlayVideo = () => {
  const [count, setCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText !== '') {
      const newComment = {
        id: comments.length + 1,
        user: 'You',
        date: 'Just Now',
        text: commentText,
        likes: 0,
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };
  const handleDelete = (id) => {
    const newComments = comments.filter(comment => comment.id !== id);
    setComments(newComments);
  };

  return (
    
    <div className="play-video">
      <video className='videoplay' src={video1} controls autoPlay muted></video>
      <h3>Discover The Nature</h3>
      <div className="play-video-info">
        <p>200k Views &bull; 2 Days Ago</p>
      <div>
        <span onClick={handleLike}>
        <img src={like} alt='' /> {likeCount}
      </span>
      <span onClick={handleDislike}>
        <img src={dislike} alt='' /> {dislikeCount}
      </span>
          <span><img src={share} alt='' /> Share </span>
          <span><img src={save} alt='' /> Save </span>
        </div>
      </div>
      <hr />
      
      <div className="publisher">
        <img src={nature} alt="" />
        <div>
          <p>Nature Beauty</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>It feels surreal being in nature</p>
        <p>Subscribe to the channel for more freshly brewed content</p>
        <hr />
        <h4>{comments.length} Comments</h4>
        {comments.map((comment) => (
          <div className="Comment" key={comment.id}>
            <img src={user_profile} alt="" />
            <div>
              <h3>{comment.user} <span>{comment.date}</span></h3>
              <p>{comment.text}</p>
              <div className="comment-actions">
                <button onClick={() => handleDelete(comment.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
        <div className="Comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Your Name <span>Just Now</span></h3>
            <textarea
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
            ></textarea>
            <div className="comment-actions">
            <button onClick={handleCommentSubmit}>Comment</button>
            {comments.length > 0 && (
              <button onClick={() => handleDelete(comments[comments.length - 1].id)}>Delete</button>
            )}
                      
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PlayVideo;
