import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignIn.css';

const SignIn = () => {

          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [
                    signInWithEmailAndPassword,
                    user,
                    loading,
                    error,
          ] = useSignInWithEmailAndPassword(auth);

          const navigate = useNavigate();

          const hnadleEmailBlur = event => {
                    setEmail(event.target.value);
          }

          const handlePasswordBlur = event => {
                    setPassword(event.target.value);
          }

          if (user) {
                    navigate('/shop')
          }


          const handleUserSignIn = event => {
                    event.preventDefault()
                    signInWithEmailAndPassword(email, password);
          }
          return (
                    <div className='signin-card'>
                              <div>
                                        <h4 className="signin-text">SignIn</h4>
                                        <form onSubmit={handleUserSignIn}>
                                                  <div className='input-group'>
                                                            <label htmlFor="Email">Email</label>
                                                            <input onBlur={hnadleEmailBlur} type="email" name="Your Email" id="" required />
                                                            <label htmlFor="Password">Password</label>
                                                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                                                  </div>
                                                  <p>{error?.message}</p>
                                                  {
                                                            loading && <p>loading...</p>
                                                  }
                                                  <button className='btn-submit' type="submit">Sign in</button>
                                                  <p>
                                                            New to Ema-John? <Link className='new-ac-link' to='/signup'>Create a new Account</Link>
                                                  </p>
                                        </form>
                              </div>
                    </div>
          );
};

export default SignIn;