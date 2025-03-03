import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import '../Styles/profileScreen.css';
import { selectUser } from '../userSlice';
import { auth } from '../firebase';

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <div className="plans">
                <div className="plan1">
                  <li>
                    <span className="plan__title">Premium</span>
                    <span className="plan__subtitle">4k + HDR</span>
                  </li>
                  <button className="plan__btn  subscribed">Subscribed</button>
                </div>
                <div className="plan2">
                  <li>
                    <span className="plan__title">Basic</span>
                    <span className="plan__subtitle">720p</span>
                  </li>
                  <button className="plan__btn">Subscribe</button>
                </div>
                <div className="plan3">
                  <li>
                    <span className="plan__title">Standard</span>
                    <span className="plan__subtitle">1080p</span>
                  </li>
                  <button className="plan__btn">Subscribe</button>
                </div>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profile__signout"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
