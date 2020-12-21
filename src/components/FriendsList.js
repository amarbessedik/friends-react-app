import React from 'react';

function FriendsList({friends}) {

    return (
      <div>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>
              <div className="friend__container">
                <div>
                  <span>{friend}</span>
                  <img src={`https://i.pravatar.cc/150?img=${index+8}`} alt="avatar" />
                </div>
                <div>
                  <span>
                    <button>Remove</button>
                  </span>
                </div>
                <div>
                  <span>
                    <button>Diactivate</button>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default FriendsList
