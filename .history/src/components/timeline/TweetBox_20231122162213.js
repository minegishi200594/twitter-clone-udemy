import { Avatar } from '@mui/material';
import React from 'react';

function TweetBox() {
  return (
    <div className='TweetBox'>
        <form>
            <Avatar />
            <input placeholder="いまどうしてる？" type='text'>
            </input>
            <input className='tweetBox--imageInput'></input>
        </form>
    </div>
  );
}

export default TweetBox;