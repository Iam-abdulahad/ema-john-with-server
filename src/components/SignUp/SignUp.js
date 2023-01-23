import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
          return (
                    <div className='signin-card'>
                              <div>
                                        <h4 className="signin-text">SignUp</h4>
                                        <form>
                                                  <div className='input-group'>
                                                            <label htmlFor="Email">Email</label>
                                                            <input type="email" name="Your Email" id="" required/>
                                                            <label htmlFor="Password">Password</label>
                                                            <input type="password" name="password" id="" required/>
                                                            <label htmlFor="Confirm-Password">Confirm Password</label>
                                                            <input type="password" name="confirm-password" id="" required/>
                                                  </div>
                                                  <button className='btn-submit' type="submit">Sign in</button>
                                                  <p>
                                                            Already have an account? <Link className='new-ac-link' to='/signin'>Please Login</Link>
                                                  </p>
                                        </form>
                              </div>
                    </div>
          );
};

export default SignUp;