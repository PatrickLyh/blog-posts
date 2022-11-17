import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/pic-1.png';
import profile2 from './image/pic-2.png';
import profile3 from './image/pic-3.png';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () =>{
    return(
        <div className='ui comments'>
            <UserCard>
                Hello I am Patrick and I live in San Jose.
            </UserCard>
            <UserCard>
                <SingleComment
                name='Sarah' 
                date='Today at 5:00pm'
                text='it is amazing'
                picture={profile1}/>
            </UserCard>
            <UserCard>
            <SingleComment
                name='Jack' 
                date='Today at 6:00pm'
                text='well it is okay'
                picture={profile2}/>
            </UserCard>
            <UserCard>
                <SingleComment
                name='Tracy' 
                date='Today at 7:00pm'
                text='I like it'
                picture={profile3}/>
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)