import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../footer/footer';

const Profile = () => {
  const LikeButton = () => {
    const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {
      setLikeCount(likeCount + 1);
    };

    return (
      <div>
        <button onClick={handleLike}>Like</button>
        <p>{likeCount} {likeCount === 1 ? 'like' : 'likes'}</p>
      </div>
    );
  };

  return (
    <>
        <div style={{marginLeft:'14%'}}>
      <div style={{ display: 'flex', flexDirection: 'row',marginLeft:'10%' }}>
        <div>
          <img src="https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" style={{ borderRadius: '50%', width: '50px', height: '50px' }} alt="User Avatar" />
        </div>
        <div>
          <h4>Ahead app redesign concept</h4>
        </div>
        <div>
          <LikeButton />
        </div>
        <div>
          <LikeButton />
        </div>
      </div>
      <div style={{marginLeft:'0%'}}>
        <video src="https://cdn.dribbble.com/userupload/3938332/file/original-984e9c8aa7bb40df5be856ec56201be1.mp4" controls style={{width:'80%',height:'650px'}}></video>
      </div>
      <div style={{margin:'8%'}}>
        <h5>Hey all,</h5>
        <h5>I have decided to make a redesign and animation for the Ahead app. Please review and I'm happy to read your feedback!</h5>
        <h5>Design — Figma</h5>
        <h5>Illustrations — Adobe Illustrator</h5>
        <h5>Animation — Adobe After Effects</h5>
        <h5>************</h5>
        <h5>💌 I am open to new projects! hey@migulko.cz</h5>
        <h5>************</h5>
        <h5>Instagram | Linkedin | UI8</h5>
      </div>
      <div>
        <img src="https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&resize=1504x9113&vertical=center" alt="Design Image" style={{width:'80%',}} />
      </div>
      <div>
        {/* Subfooter content */}
      </div>
      {/* Footer content */}
    </div>
    
    </>
  );
};

export default Profile;
