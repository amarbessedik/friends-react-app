import React from "react";
import Profile from "./Profile";

function DeactivatedFriendsList({
  deactivatedFriends,
  removeDeactivatedFriend,
  reactivateFriend,
}) {
  return (
    <div>
      <h1>Deactivated Subscribers</h1>
      <ul>
        {!deactivatedFriends.length ? (
          <h3>You currently have no deactivated friends</h3>
        ) : (
          deactivatedFriends.map((subscriber, index) => (
            <li key={index}>
              <div className="friend__container deactivated__friend__container">
                <Profile
                  name={subscriber}
                  img={`https://i.pravatar.cc/150?img=${index + 1}`}
                  date={new Date().toISOString().slice(0, 10)}
                  status="Unsubscribed on: "
                />
                <div>
                  <div>
                    <span>
                      <button onClick={() => reactivateFriend(subscriber)}>
                        Reactivate
                      </button>
                    </span>
                  </div>
                  <div>
                    <span>
                      <button
                        onClick={() => removeDeactivatedFriend(subscriber)}
                      >
                        <span className="remove__btn">Remove</span>
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
