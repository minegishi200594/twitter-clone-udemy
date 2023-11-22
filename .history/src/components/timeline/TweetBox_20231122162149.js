import { Avatar } from '@mui/material';
import React from 'react';

function TweetBox() {
  return (
    <div className='TweetBox'>
        <form>
            <Avatar />
            <input placeholder="いまどうしてる？">
            </input>
            <input className='tweetBox--imageInput'
        </form>
    </div>
  );
}

export default TweetBox;