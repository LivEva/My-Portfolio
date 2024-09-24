
import React, { useState } from 'react';
import './App.css';

const HomeScreen = () => {


    return (
        <div className="page-container">
            <div className="content-wrap">
                <h2>Personal Profile</h2>
                <p id='bio'>My name is Olivia, and I am a Junior Software Developer.</p>
                <img id='certificate' src="/src/certificate.png" alt="" />
            </div>

           
        </div>
    );
}

export default HomeScreen;
