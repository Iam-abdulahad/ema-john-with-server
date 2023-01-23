import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
          return (
                    <div className='signin-card'>
                              <div>
                                        <h4 className="signin-text">SignIn</h4>
                                        <form>
                                                  <div className='input-group'>
                                                            <label htmlFor="Email">Email</label>
                                                            <input type="email" name="Your Email" id="" required/>
                                                            <label htmlFor="Password">Password</label>
                                                            <input type="password" name="password" id="" required/>
                                                  </div>
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