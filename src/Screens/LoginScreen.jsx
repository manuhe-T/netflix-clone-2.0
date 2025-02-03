import React from 'react';
import '../Styles/loginScreen.css';
import NetflixLogo from '../assets/Netflix_Logo_RGB.png';
import LoginScreenBackground from '../assets/loginScreenBackground.jpg';

const LoginScreen = () => {
  return (
    <div
      className="loginScreen"
      style={{
        backgroundImage: `url(${LoginScreenBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={NetflixLogo} alt="" />
        <button className="loginScreen__button">Sign in</button>
        <div className="loginScreen--gradient"></div>
      </div>
    </div>
  );
};

export default LoginScreen;
