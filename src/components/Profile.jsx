import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ComboBox from '../components/ComboBox';

function Profile(props) {
  const [isNameEditing, setNameEditing] = useState(false);
  const [isEmailEditing, setEmailEditing] = useState(false);
  const [name, setName] = useState(props.profile.name);
  const [email, setEmail] = useState(props.profile.mail);

  const profile = props.profile;

  const handleNameEdit = () => {
    setNameEditing(!isNameEditing);
  };

  const handleEmailEdit = () => {
    setEmailEditing(!isEmailEditing);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className='card m-3'>
      <img src={profile.picture} alt="Profile" className="card-img-top" />
      <div className="profile-info">
        <div class = "d-flex">
          {isNameEditing ? (
            <input type="text" value={name} onChange={handleNameChange} />
          ) : (
            <h2>{name}</h2>
          )}
          {isNameEditing ? (
            <button class="btn btn-primary btn-block fa-lg mb-3" onClick={handleNameEdit}>Save</button>
          ) : (
            <button class="btn btn-primary btn-block fa-lg mb-3" onClick={handleNameEdit}>Change</button>
        )}
        </div>
        <div class = "d-flex">
          {isEmailEditing ? (
            <input type="text" value={email} onChange={handleEmailChange} />
          ) : (
            <p>{email}</p>
          )}
          {isEmailEditing ? (
            <button class="btn btn-primary btn-block fa-lg mb-3" onClick={handleEmailEdit}>Save</button>
          ) : (
            <button class="btn btn-primary btn-block fa-lg mb-3" onClick={handleEmailEdit}>Change</button>
          )}
        </div>
      </div>
      <div className='col-5'>
        <ComboBox />
      </div>
    </div>
  );
}

export default Profile;