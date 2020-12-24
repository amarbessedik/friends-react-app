import React from 'react'

function Profile({ img, name, date, status = "Joined on: " }) {
  return (
    <div className="user__profile">
      <img src={img} alt="profile_pic" />
      <h3>{name}</h3>
      <p>{status} {date}</p>
    </div>
  );
}

export default Profile
