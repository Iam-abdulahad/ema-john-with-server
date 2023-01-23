import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [confirmPassword, setConfirmPassword] = useState('');
          const [error, setError] = useState('');
          const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
          const navigate = useNavigate;


          const handleEmailBlur = event => {
                    setEmail(event.target.value);
          }

          const handlePasswordBlur = event => {
                    setPassword(event.target.value);
          }

          const handleConfirmPasswordBlur = event => {
                    setConfirmPassword(event.target.value);
          }
          
          if (user){
                    return(
                              navigate('/shop')
                    )
          }
          const handleCreateUser = event => {
                    event.preventDefault()
                    if(password !== confirmPassword){
                              setError('Your password are not matched! Please type similar password in both field.')
                              return;
                    }
          }

          return (
                    <div className='signin-card'>
                              <div>
                                        <h4 className="signin-text">SignUp</h4>
                                        <form onSubmit={handleCreateUser}>
                                                  <div className='input-group'>
                                                            <label htmlFor="Email">Email</label>
                                                            <input onBlur={handleEmailBlur} type="email" name="Your Email" id="" required />
                                                            <label htmlFor="Password">Password</label>
                                                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                                                            <p style={{color: 'red'}}>{error}</p>
                                                            <label htmlFor="Confirm-Password">Confirm Password</label>
                                                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                                                  </div>
                                                  <button onClick={() => {createUserWithEmailAndPassword(email, password)}} className='btn-submit' type="submit">Sign up</button>
                                                  <p>
                                                            Already have an account? <Link className='new-ac-link' to='/signin'>Please Login</Link>
                                                  </p>
                                        </form>
                              </div>
                    </div>
          );
};

export default SignUp;