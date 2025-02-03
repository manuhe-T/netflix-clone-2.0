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
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={NetflixLogo} alt="" />
        <button className="loginScreen__button">Sign in</button>
        <div className="loginScreen--gradient"></div>
      </div>

      <div className="loginScreen__body">
        <>
          <h1>Unlimited films, Tv programs and more.</h1>
          <h2>Watch anywhere, cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="loginScreen__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button className="loginScreen__getStarted">GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default LoginScreen;
