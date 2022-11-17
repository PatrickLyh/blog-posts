import React from 'react';
import profile1 from './image/pic-1.png';
import profile2 from './image/pic-2.png';
import profile3 from './image/pic-3.png';

const SingleComment = (props) =>{
    console.log(props)
    return(
        <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={props.picture} alt="profile picture" />
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        {props.name}
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            {props.date}
                        </span>
                    </div>
                    <div className='text'>
                        {props.text}
                    </div>
                </div>
        </div>
        
    )
}

export default SingleComment;