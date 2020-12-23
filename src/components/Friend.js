import React, { useState } from 'react';
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import Profile from './Profile';
import zIndex from '@material-ui/core/styles/zIndex';

function Friend({index, friend, deactivateFriend }) {
  const [edit, setEdit] = useState(false);

  return (
    <li>
      <div className="friend__container">
        <Profile
          img={`https://i.pravatar.cc/150?img=${index + 1}`}
          name={friend}
          date={`1${index}-${index + 1}-201${index}`}
        />
        <div>
          {
            <div>
              {edit && (
                <span>
                  <span>
                    <button onClick={() => setEdit(false)}>
                      <CancelIcon className="icon" />
                    </button>
                  </span>
                  <span>
                    <button onClick={() => deactivateFriend(friend)}>
                      Unfriend
                    </button>
                  </span>
                </span>
              )}
              {!edit && (
                <span>
                  <button onClick={() => setEdit(true)}>
                    <EditIcon className="icon" />
                  </button>
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