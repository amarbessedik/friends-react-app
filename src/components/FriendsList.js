import React from 'react';
import Friend from './Friend';

function FriendsList({friends, deactivateFriend}) {

    return (
      <div>
        <h1>Subscribers</h1>
        <ul>
          {!friends.length ? (
            <h3>You currently have no friends</h3>
          ) : (
            friends.map((friend, index) => (
              <span key={index}>
                <Friend index={index} deactivateFriend={deactivateFriend} friend={friend} />
              </span>
            ))
          )}
        </ul>
      </div>
    );
}

export default FriendsList
