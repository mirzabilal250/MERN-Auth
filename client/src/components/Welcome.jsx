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

  return (
    <div className="home">
      <h1>Welcome to the QAPAP-Authentication Project</h1>
      <button onClick={logInHandler}>Log-In</button>
      <button onClick={SignUpHandler}>Sign-Up</button>
    </div>
  );
};

export default Welcome;