import { useRef } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';
import '../Styles/signupScreen.css';

const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const authUser = createUserWithEmailAndPassword(auth, email, password);
      console.log(authUser);
    } catch (error) {
      alert(error.message);
    }
  };

  const signIn = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    // try {
    //   const authUser = signInWithEmailAndPassword(auth, email, password);
    //   console.log(authUser);
    // } catch (error) {
    //   alert(error.message);
    // }

    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>
          <span onClick={register} className="signupScreen__link">
            {' '}
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
