import React, {useState} from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import DeactivatedFriendsList from './components/DeactivatedFriendsList';

function App() {
  const initialFriendList = ["John", "Malik", "Rebicca"];
  const [friends, setFriends] = useState(initialFriendList);
  const [newFriend, setNewFriend] = useState('');
  const [deactivatedFriends, setDeactivatedFriends] = useState([]);

  const handleChange = (e)=>{
     e.preventDefault();
     setNewFriend(e.target.value);
  }

  const addFriend = () =>{
    newFriend && setFriends([...friends, newFriend]);
    setNewFriend('');
  }

  const removeFriend = (friend)=>{
       const newFriendList = friends.filter(entry=> entry !== friend)
       setFriends(newFriendList);
  }
  const removeDeactivatedFriend = (friend) => {
    const newDeactivatedFriendList = deactivatedFriends.filter(
      (entry) => entry !== friend
    );
    setDeactivatedFriends(newDeactivatedFriendList);
  };

  const deactivateFriend = (friend) =>{
    setDeactivatedFriends([...deactivatedFriends, friend]);
    removeFriend(friend);
  }
  const reactivateFriend = (friend) =>{
    setFriends([...friends, friend]);
    const newDeactivatedFriends = deactivatedFriends.filter(entry => entry !== friend);
    setDeactivatedFriends(newDeactivatedFriends);
  }
  return (
    <div className="app">
      <h1 className="app__title">Friends Management Portal</h1>
      <form onSubmit={(e)=> e.preventDefault()}>
        <span>
          <input onChange={handleChange} type="text" value={newFriend} id="" />
        </span>
        <span>
          <button onClick={addFriend} type="submit">
            Join
          </button>
        </span>
      </form>
      <FriendsList
        deactivateFriend={deactivateFriend}
        // removeFriend={removeFriend}
        friends={friends}
      />
      <hr />
      <hr />
      <DeactivatedFriendsList
        deactivatedFriends={deactivatedFriends}
        removeDeactivatedFriend={removeDeactivatedFriend}
        reactivateFriend={reactivateFriend}
      />
    </div>
  );
}

export default App;
