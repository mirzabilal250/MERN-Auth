import { useNavigate } from "react-router-dom";
import "../scss/welcome.scss";

const Welcome = () => {

    const Navigate = useNavigate();

    const SignUpHandler = () => {
        Navigate("/register")
    }

    const logInHandler = () => {
        Navigate("/login")
    }

    const SignUpPhraseHandler = () => {
      Navigate("/registerPhrase")
  }

  return (
    <div className="home">
      <h1>Welcome to the QAPAP-Authentication Project</h1>
      <div id="loginSignupButtom">
      <button id="loginButton" onClick={logInHandler}>Log-In</button>
      <button onClick={SignUpHandler}>Sign-Up</button>
      </div>
      <button onClick={SignUpPhraseHandler}>Sign-Up with Phrase</button>
    </div>
  );
};

export default Welcome;