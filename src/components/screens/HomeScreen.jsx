
import React, { useState } from 'react';
import profile from '../../assets/profilePicture.jpeg'
import '../../CSS/home.css'



const HomeScreen = () => {


    return (
        <div className="page-container">
            
              <h2>Hello...</h2>
            <div className="content-wrap">
                <img src={profile} className='profile-picture' />

                <p id='bio'>My name is Olivia, and I am a Junior Software Developer.</p>
                
            </div>

           
        </div>
    );
}

export default HomeScreen;
