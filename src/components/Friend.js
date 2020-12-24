import React, { useState } from 'react';
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import Profile from './Profile';
import zIndex from '@material-ui/core/styles/zIndex';

function Friend({index, subscriber, deactivateFriend }) {
  const [edit, setEdit] = useState(false);

  return (
    <li>
      <div className="friend__container">
        <Profile
          img={`https://i.pravatar.cc/150?img=${index + 1}`}
          name={subscriber}
          date={`201${index}-${index + 1}-1${index + 1}`}
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
                    <button onClick={() => deactivateFriend(subscriber)}>
                      Unsubscribe
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