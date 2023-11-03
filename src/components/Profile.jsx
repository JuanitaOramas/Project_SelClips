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
        {isNameEditing ? (
          <input type="text" value={name} onChange={handleNameChange} />
        ) : (
          <h2>{name}</h2>
        )}
        {isNameEditing ? (
          <button onClick={handleNameEdit}>Guardar</button>
        ) : (
          <button onClick={handleNameEdit}>Editar</button>
        )}
        {isEmailEditing ? (
          <input type="text" value={email} onChange={handleEmailChange} />
        ) : (
          <p>{email}</p>
        )}
        {isEmailEditing ? (
          <button onClick={handleEmailEdit}>Guardar</button>
        ) : (
          <button onClick={handleEmailEdit}>Editar</button>
        )}
      </div>
      <div className='col-5'>
        <ComboBox />
      </div>
    </div>
  );
}

export default Profile;