import { useState } from "react";
import "../scss/resetPassword.scss";
import FormInput from "./FormInput";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { reset, resetPassword } from "../redux/authSlice";
import { useEffect } from "react";

const ResetPassword = () => {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });

  // const history = useHistory();
  const { password } = values;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const resetToken = location.pathname.split("/")[2];

  const { isSuccess, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    } else if (isSuccess) {
      toast.success(message);
      window.location.href = "http://localhost:3000/login";
      // navigate("login");
    }
    dispatch(reset());
  }, [isSuccess, isError, message, navigate, dispatch]);


  // const handleRedirect = () => {
  //   history.push('/login');
  // };

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      pattern: "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,15}",
      errormessage: "Passwords must have 8 to 15 characters and contains at least 1 digit & 1 special character",
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
      errormessage: "Passwords do not match",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ password, resetToken }));
  };

  const onChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="reset-password">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Reset Password</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Reset Password</button>
        <span>
          Want to login? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default ResetPassword;
