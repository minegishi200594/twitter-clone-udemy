import { Avatar } from '@mui/material';
import React from 'react';

function TweetBox() {
  return (
    <div className='TweetBox'>
        <form>
            <Avatar />
            <input>
            place
            </input>
        </form>
    </div>
  )
}

export default TweetBox;