import "./Registerpage.css";
import { registerUser } from "../services/registerUser";
import { useState } from "react";

export function Registerpage() {
   const onSubmit = (data) => {
     registerUser(data);
   };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");


  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  const [terms, setTerms] = useState("");
  const [termsError, setTermsError] = useState("");

  const [formValidation, setFormValidation] = useState({
    email: undefined,
    name: undefined,
    age: undefined,
    password: undefined,
    passwordCheck: undefined,
    terms: undefined,
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value;
    registerUser(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  
    const emailError = !value
      ? "email is required"
      : !/\S+@\S+\.\S+/.test(value)
      ? "email is invalid"
      : "";
  
    setEmailError(emailError);
    setFormValidation({
      ...formValidation,
      email: emailError
    });
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  
    const nameError = !value
      ? "name is required" : "";
  
    setNameError(nameError);
    setFormValidation({
      ...formValidation,
      name: nameError
    });
  };

  const handleAgeChange = (event) => {
    const value = event.target.value;
    setAge(value);
    const ageError = !value
      ? "age is required" 
      : parseInt(value) < 18
      ? "you must be above 18 to register"
      : "";
  
    setAgeError(ageError);
    setFormValidation({
      ...formValidation,
      age: ageError
    });
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    const passwordError = !value
    ? "password is required"
    : value.length < 5
    ? "password is too short"
    : "";
  
    setPasswordError(passwordError);
    setFormValidation({
      ...formValidation,
      password: passwordError
    });
  };


  const handlePasswordCheckChange = (event) => {
    const value = event.target.value;
    setPasswordCheck(value);
    const passwordCheckError = value != password
    ? "passwords do not match"
    : "";
  
    setPasswordCheckError(passwordCheckError);
    setFormValidation({
      ...formValidation,
      passwordCheck: passwordCheckError
    });
  };

  const handleTermsChange = (event) => {
    const checked  = event.target.checked ;
    setTerms(checked );
    const termsError = !checked 
    ? "please read and accept the terms and conditions"
    : "";
  
    setTermsError(termsError);
    setFormValidation({
      ...formValidation,
      terms: termsError
    });
  };

  const isFormValid = Object.keys(formValidation).every(key => formValidation[key] === "")


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
            {emailError && <span className="error" role="alert">{emailError}</span>}
          </label>
          
        </div>
        <div>
          <label>
            Name
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
            {nameError && <span className="error" role="alert">{nameError}</span>}
          </label>
          <span className="error" role="alert"></span>
        </div>
        <div>
          <label>
            Age
            <input type="number" placeholder="Age" value={age} onChange={handleAgeChange} />
            {ageError && <span className="error" role="alert">{ageError}</span>}
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            {passwordError && <span className="error" role="alert">{passwordError}</span>}
          </label>
        </div>
        <div>
          <label>
            Password check
            <input type="password" placeholder="Password check"  value={passwordCheck} onChange={handlePasswordCheckChange} />
          </label>
          {passwordCheckError && <span className="error" role="alert">{passwordCheckError}</span>}

        </div>
        <div>
          <label>
            <input type="checkbox" value={terms} onChange={handleTermsChange}/>
            Accept terms & conditions: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque pharetra, tortor ac placerat
            elementum, neque libero luctus mi, ut efficitur nisl mauris at nisl.
            Suspendisse non neque et neque facilisis convallis. Praesent erat
            magna, sollicitudin eu porttitor ut, tincidunt sit amet urna.
            Vestibulum congue neque metus.
            {termsError && <span className="error" role="alert">{termsError}</span>}
          </label>
        </div>

        <button disabled = {!isFormValid}>Sign up</button>
      </form>
    </div>
  );
}
export default Registerpage;