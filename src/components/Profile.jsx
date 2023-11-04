import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ComboBox from '../components/ComboBox';
import profileimg from "./profile.jpg";
import './profile.css';

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
    <div className="container-profile">
      <img src={profileimg} alt="profileimg" className="profileimg" />
      <br/><br/>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className = "d-flex">
          {isNameEditing ? (
            <input type="text" class="form-control"
            placeholder="New name" value={name} onChange={handleNameChange} />
          ) : (
            <h1>{name}</h1>
          )}
          {isNameEditing ? (
            <button class="btn btn-info pencil" onClick={handleNameEdit}>
              <i class="bi bi-save-fill "></i>
            </button>
          ) : (
            <button class="btn btn-info pencil" onClick={handleNameEdit}>
              <i class="bi bi-pencil-fill "></i>
            </button>
        )}
        </div>
        <div className = "d-flex">
          {isEmailEditing ? (
            <input type="email" id="form2Example11" className="form-control"
            placeholder="example@mail.com" value={email} onChange={handleEmailChange} />
          ) : (
            <p>{email}</p>
          )}
          {isEmailEditing ? (
            <button class="btn btn-info pencil" onClick={handleEmailEdit}>
              <i class="bi bi-save-fill"></i>
            </button>
          ) : (
            <button class="btn btn-info pencil" onClick={handleEmailEdit}>
              <i class="bi bi-pencil-fill"></i>
            </button>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <ComboBox />
      </div>
      <br/><br/>
    </div>
  );
}

export default Profile;