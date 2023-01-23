import React from 'react';
import './SignIn.css';

const SignIn = () => {
          return (
                    <div className='signin-card'>
                              <div>
                                        <h4 className="signin-text">Signin</h4>
                                        <form>
                                                  <div className='input-group'>
                                                            <label htmlFor="Email">Email</label>
                                                            <input type="email" name="Your Email" id="" />
                                                            <label htmlFor="Password">Password</label>
                                                            <input type="password" name="password" id="" />
                                                  </div>
                                                  <button className='btn-submit' type="submit">Sign in</button>
                                        </form>
                              </div>
                    </div>
          );
};

export default SignIn;