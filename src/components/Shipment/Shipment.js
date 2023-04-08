import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
          const [user] = useAuthState(auth);
          const [email, setEmail] = useState('');
          const [name, setName] = useState('');
          const [phone, setPhone] = useState('');
          const [address, setAddress] = useState('');
          const [error, setError] = useState('');
          // const navigate = useNavigate();

          const handleNameBlur = event => {
                    setName(event.target.value);
          }

          const handlePhoneBlur = event => {
                    setPhone(event.target.value);
          }

          const handleAddressBlur = event => {
                    setAddress(event.target.value);
          }
          return (
                    <div className='signin-card'>
                              <div>
                                        <h4 className="signin-text">Shipping Info</h4>
                                        <form s>
                                                  <div className='input-group'>
                                                            <label htmlFor="text">Your Name</label>
                                                            <input onBlur={handleNameBlur} type="text" name="Your Email" id="" required />
                                                            <label htmlFor="Email">Your Email</label>
                                                            <input value= {user?.email} readOnly type="email" name="Your Email" id="" required />
                                                            <label htmlFor="number">Your Phone</label>
                                                            <input onBlur={handlePhoneBlur} type="number" name="number" id="" required />
                                                            <p style={{ color: 'red' }}>{error}</p>
                                                            <label htmlFor="address">Address</label>
                                                            <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                                                  </div>
                                                  <button className='btn-submit' type="submit">Confirm Order</button>

                                        </form>
                              </div>
                    </div>
          );
};

export default Shipment;