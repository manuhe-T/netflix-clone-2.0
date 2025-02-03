import '../Styles/signupScreen.css';

const SignupScreen = () => {
  const register = (e) => {
    e.preventDefault();
  };
  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
         <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={register} type="submit">
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>
          <span onClick={signIn} className="signupScreen__link">
            {' '}
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
