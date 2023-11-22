import { Avatar } from '@mui/material';
import React from 'react';

function TweetBox() {
  return (
    <div className='TweetBox'>
        <form>
            <Avatar />
            <input>
            placeholder="今どうしてる"
            </input>
        </form>
    </div>
  )
}

export default TweetBox;