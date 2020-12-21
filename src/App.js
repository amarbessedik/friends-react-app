import React, {useState} from 'react';
import './App.css';
import FriendsList from './components/FriendsList'

function App() {
  const initialState = ["John", "Malik", "Rebicca"];
  const [friends, ] = useState(initialState);
  return (
    <div className="app">
      <h1 className='app__title'>Friends Of The Internet</h1>
      <FriendsList friends={friends} />
    </div>
  );
}

export default App;
