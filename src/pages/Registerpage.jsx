import "./Registerpage.css";
import { registerUser } from "../services/registerUser";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoSelfClips from '../logoSelfClips.png';

export function Registerpage() {
  const onSubmit = (data) => {
    registerUser(data);
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");


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
    const checked = event.target.checked;
    setTerms(checked);
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
      <section class="h-100 login-form" >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">

                      <div class="text-center">
                        <br/><br/>
                        <h4 class="mt-1 mb-5 pb-1"><strong>Welcome to Selfclips!</strong></h4>
                      </div>

                      <form>
                        <p class ="paragraph"><strong>Please login to your account</strong></p>
                        <div class="form-outline mb-4">
                        
                        <label class="form-label " for="form2Example11">Username</label>
                          <input type="text" class="form-control" placeholder="username" value={name} onChange={handleNameChange}/>
                          {nameError && <span className="error" role="alert">{nameError}</span>}
                        </div>

                        <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example11">Email</label>
                          <input type="email" id="form2Example11" class="form-control"
                            placeholder="example@mail.com" value={email} onChange={handleEmailChange}/>
                            {emailError && <span className="error" role="alert">{emailError}</span>}
                        </div>

                        <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22">Password</label>
                          <input type="password" id="form2Example22" class="form-control"  value={password} onChange={handlePasswordChange}/>
                          {passwordError && <span className="error" role="alert">{passwordError}</span>}
                        </div>

                        <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22">Repeat Password</label>
                          <input type="password" id="form2Example22" class="form-control"value={passwordCheck} onChange={handlePasswordCheckChange} />
                          {passwordCheckError && <span className="error" role="alert">{passwordCheckError}</span>}
                        </div>

                        <div class="text-center">
                          <label>
                            <input class="form-check-input  custom-checkbox-color" type="checkbox"   value={terms} onChange={handleTermsChange}/>  Accept terms & conditions
                            {termsError && <span className="error" role="alert">{termsError}</span>}
                          </label>
                        </div>

                        <div class="text-center pt-1 mb-2 pb-1">
                          <button class="btn  btn-block fa-lg gradient-custom-3 mb-3" type="button" disabled = {!isFormValid}>Register</button>
                        </div>
                        <div class="d-flex align-items-center justify-content-center ">
                          <p class="mb-0 me-2">Already have an account?</p>
                          <Link to="/login"><button type="button" class="btn btn-outline-danger">Log in</button></Link>
                        </div>

                      </form>

                    </div>
                  </div>
                  
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-3">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      
                      <h4 class="mb-4">We are more than just a company</h4>
                      <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Registerpage;