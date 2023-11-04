import React from 'react';
import Profile from '../components/Profile';
import "../components/profile.css";


const profile = {
    name: "Nicolas Perez",
    mail: "nicolasperez_stafe@gmail.com",
    picture: ".\src\profile.jpg"
};

function Profilepage() {
    return(
        <div className="text-center" >
            <div className='card m-3 d-flex justify-content-center align-items-center'>
                <h2 className="mt-1 mb-5 pb-1"><strong>User Profile</strong></h2>
                <Profile profile = {profile} />                
            </div>
        </div>
    )
}


export default Profilepage;
