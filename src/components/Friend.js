import React, { useState } from 'react';

function Friend({index, friend, deactivateFriend }) {
  const [edit, setEdit] = useState(false);

  return (
    <li>
      <div className="friend__container">
        <div>
          <img
            src={`https://i.pravatar.cc/150?img=${index + 1
            }`}
            alt="avatar"
          />
          <span className="friend__name">{friend}</span>
        </div>
        <div>
          {
            <div>
              {edit && (
                <span>
                  <span>
                    <button onClick={() => deactivateFriend(friend)}>
                      Unfriend
                    </button>
                  </span>
                  <span>
                    <button onClick={() => setEdit(false)}>Cancel Edit</button>
                  </span>
                </span>
              )}
              {!edit && (
                <span>
                  <button onClick={() => setEdit(true)}>Edit</button>
                </span>
              )}
            </div>
          }
        </div>
      </div>
    </li>
  );
}

export default Friend;