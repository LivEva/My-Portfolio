
import React, { useState } from 'react';
import '../../CSS/home.css'
import SkillsCard from '../cards/SkillsCard';
import Profile from '../cards/Profile';
import ExperienceCard from '../cards/ExperienceCard';




const HomeScreen = () => {


    return (
        <div 
        
        className="page-container">             
        
                <Profile />
                
            <section className='content-wrap'>

                <SkillsCard />

                <ExperienceCard />

            </section>

        </div>
    );
}

export default HomeScreen;
