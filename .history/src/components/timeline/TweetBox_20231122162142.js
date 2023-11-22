import { Avatar } from '@mui/material';
import React from 'react';

function TweetBox() {
  return (
    <div className='TweetBox'>
        <form>
            <Avatar />
            <input placeholder="いまどうしてる？">
            </input>
            <input className='tweet'
        </form>
    </div>
  );
}

export default TweetBox;