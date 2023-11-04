import React from 'react';
import Profile from '../components/Profile';
import ComboBox from '../components/ComboBox';


const profile = {
    name: "James Bond",
    mail: "james.bond@gmail.com",
    picture: "https://www.elcarrocolombiano.com/wp-content/uploads/2022/01/kia-ev6-what-car-carro-del-an%CC%83o.jpg"
};

function Profilepage() {
    return(
        <div className='container' >
        <h2>User Profile</h2>
            <div class='card m-3'>
                <Profile profile = {profile} />                
            </div>
        </div>
    )
}


export default Profilepage;
