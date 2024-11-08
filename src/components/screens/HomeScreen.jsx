
import React, { useState } from 'react';
import profile from '../../assets/profilePicture.jpeg'
import '../../CSS/home.css'
import SkillsCard from '../cards/SkillsCard';
import Links from '../cards/Links';



const HomeScreen = () => {


    return (
        <div className="page-container">             
           
            <div className="content-wrap">

               <img src={profile} className='profile-picture' />

               <Links />

                <p id='bio'>My name is Olivia, and I am a Junior Software Developer.</p>

                <p>An enthusiastic junior software developer and a recent graduate of Northcoders intensive full-stack bootcamp. I’ve found coding to be like an evolving puzzle with endless possibilities and being a naturally curious person, I’m driven by the desire to understand and innovate. With a background in music production, I've found parallels between coding and creating music—both involve learning, experimenting, and crafting something unique. These aspects of creativity and logic is what makes coding so fascinating and rewarding for me. I am passionate about contributing to a team, pushing the boundaries of what’s possible through code, creating impactful solutions together and continuously growing. 
                    
                </p>
                
            </div>

            <SkillsCard />

           
        </div>
    );
}

export default HomeScreen;
