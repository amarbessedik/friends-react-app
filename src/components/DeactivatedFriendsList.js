import React from "react";

function DeactivatedFriendsList({
  deactivatedFriends,
  removeDeactivatedFriend,
  reactivateFriend,
}) {
  return (
    <div>
        <h1>Deactivated Friends</h1>
      <ul>
        {!deactivatedFriends.length ? (
          <h3>You currently have no deactivated friends</h3>
        ) : (
          deactivatedFriends.map((friend, index) => (
            <li key={index}>
              <div className="friend__container deactivated__friend__container">
                <div>
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 8}`}
                    alt="avatar"
                  />
                  <span className="friend__name">{friend}</span>
                </div>
                <div>
                  <div>
                    <span>
                      <button onClick={() => reactivateFriend(friend)}>
                        Reactivate
                      </button>
                    </span>
                  </div>
                  <div>
                    <span>
                      <button onClick={() => removeDeactivatedFriend(friend)}>
                        <span className='remove__btn'>Remove</span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default DeactivatedFriendsList;
