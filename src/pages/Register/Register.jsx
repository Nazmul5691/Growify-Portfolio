/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import swal from 'sweetalert';


const Register = () => {

    const [registerError, setRegisterError] = useState('');

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        

        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // console.log(name, photo, email, password); 

        setRegisterError('')

        if(password.length < 6){
          setRegisterError('Password should be at least 6 character or longer')
          return;
        }
        
        const checkPasswordValidity = (password) => {
          const isNonWhiteSpace = /^\S*$/;
          if (!isNonWhiteSpace.test(password)) {
            return "Password must not contain Whitespaces.";
          }
  
          const isContainsUppercase = /^(?=.*[A-Z]).*$/;
          if (!isContainsUppercase.test(password)) {
            return "Password must have at least one Uppercase Character.";
          }
  
          const isContainsLowercase = /^(?=.*[a-z]).*$/;
          if (!isContainsLowercase.test(password)) {
            return "Password must have at least one Lowercase Character.";
          }
  
          const isContainsNumber = /^(?=.*[0-9]).*$/;
          if (!isContainsNumber.test(password)) {
            return "Password must contain at least one Digit.";
          }
  
          const isContainsSymbol =
            /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
          if (!isContainsSymbol.test(password)) {
            return "Password must contain at least one Special Symbol.";
          }
  
          const isValidLength = /^.{8,16}$/;
          if (!isValidLength.test(password)) {
            return "Password must be 8-16 Characters Long.";
          }
  
          return null;
        }
  
        const message = checkPasswordValidity(password);

        if (!message) {
              //  console.log("Hurray! Your Password is Valid and Strong.");
          }
          else {
               setRegisterError(message)
               return;
          }

        createUser(email, password)
        .then(result =>{
          swal("Registration Successful!", "You are now registered.", "success");
        })
        .catch(error =>{
          swal("Registration Error", "Please try again.", "error");
          setRegisterError('Email already in used. Try a different one.');
        })
    } 

  return (
    <div className="mb-16">
      
      <h2 className="text-2xl text-center mt-5">Please Register</h2>
      <div className="card flex-shrink-0 mx-auto mt-6 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister}  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="mb-5 ml-8">
          Already have an account? Please{" "}
          <Link to="/login">
            <span className="text-blue-700 font-bold">Login</span>
          </Link>
        </p>
        
      </div>
      <div className="text-center mt-3 text-red-600">
      {
          registerError && <p>{registerError}</p>
      }
      </div>
    </div>
  );
};

export default Register;
