import React from 'react';
import './home.css';
import football from '../assets/football.png';

const Home = () => {
    return (
        <div>
            <h1>Donde empieza el trabajo en equipo</h1>
            <img src={football} alt="" />
        </div>
    )
}

export default Home;