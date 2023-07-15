import { useState } from "react";
import "../scss/registration.scss";
import FormInput from "./FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../redux/authSlice";
import { useEffect } from "react";

const RegistrationPhrase = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    education: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, education, age, password } = values;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSuccess, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    } else if (isSuccess) {
      toast.success("User Registered Successfully");
      navigate("/");
    }
    dispatch(reset());
  }, [isSuccess, isError, message, navigate, dispatch]);

  const inputEmail = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      autocomplete: "off",
      // label: "Username",
      required: true,
      pattern: "^[\\w\\s]{3,}$",
      errormessage: "Username should be atleast 3 characters",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      autocomplete: "off",
      // label: "Email",
      required: true,
      pattern: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
      errormessage: "It should be a valid email",
    }
  ];

  const inputPassword = [
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      autocomplete: "off",
      // label: "Password",
      required: true,
      pattern: "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,15}",
      errormessage: "Passwords must have 8 to 15 characters and contains at least 1 digit",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      autocomplete: "off",
      // label: "Confirm Password",
      required: true,
      pattern: values.password,
      errormessage: "Passwords do not match",
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      education,
      age,
      password,
    };

    dispatch(register(userData));
  };

  const onChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: `${0.5}em` }}>Register With Phrase</h2>
        {inputEmail.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="formInput">
          <select name = "education" onChange={onChange} type="text">
            <option value="">Education</option>
            <option value = "Graduate">Graduate</option>
            <option value = "Undergraduate">Undergraduate</option>
            <option value = "Others">Others</option>
         </select>
        </div>
        <div className="formInput">
        <select name = "age" onChange={onChange} type="text"> 
            <option value="">Age</option>
            <option value = "0-15 years old">0-15 years old</option>
            <option value = "15-20 years old">15-20 years old</option>
            <option value = "21-25 years old">21-25 years old</option>
            <option value = "25-30 years old">25-30 years old</option>
            <option value = "30+">30+</option>
         </select>
        </div>
         
        {inputPassword.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Register</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegistrationPhrase;
