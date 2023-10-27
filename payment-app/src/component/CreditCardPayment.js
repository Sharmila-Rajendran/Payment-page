import React, { useState } from 'react';
import './CreditCardPayment.css';

const CreditCardPayment = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    name: '',
    country: '',
    city: '',
    zipCode: '',
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', formData);
  };

  return (
    <div className='Payment-page'>
    <div className="credit-card">
      <div className="credit-card__form">
      <h1>Card Details</h1>
      <p>Indicate details of the card from which money will be debited</p>
      <div className='credit-card-container'>
      <div className='svg-container'>
        <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#2100c4" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4 V35z"/><path fill="#fff" d="M15.186,19l-2.626,7.832c0,0-0.667-3.313-0.733-3.729c-1.495-3.411-3.701-3.221-3.701-3.221 L10.726,30v-0.002h3.161L18.258,19H15.186z M17.689,30h2.871l1.736-11h-2.907L17.689,30z M38.008,19h-3.021l-4.71,11h2.852 l0.588-1.571h3.596L37.619,30h2.613L38.008,19z M34.513,26.328l1.563-4.157l0.818,4.157H34.513z M26.369,22.206 c0-0.606,0.498-1.057,1.926-1.057c0.928,0,1.991,0.674,1.991,0.674l0.466-2.309c0,0-1.358-0.515-2.691-0.515 c-3.019,0-4.576,1.444-4.576,3.272c0,3.306,3.979,2.853,3.979,4.551c0,0.291-0.231,0.964-1.888,0.964 c-1.662,0-2.759-0.609-2.759-0.609l-0.495,2.216c0,0,1.063,0.606,3.117,0.606c2.059,0,4.915-1.54,4.915-3.752 C30.354,23.586,26.369,23.394,26.369,22.206z"/><path fill="#f5bc00" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029s-4.44,0-4.44,0 S10.894,20.84,12.212,24.945z"/></svg>
        <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#3F51B5" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"/><path fill="#FFC107" d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"/><path fill="#FF3D00" d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"/></svg>
      </div><br></br>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="number"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder='0000 0000 0000 0000'
              className="input-box"
              maxLength="16"
              required
            />
          </div><br></br><br></br>
          <div className='form-row'>
            <div className="form-group col-md-6">
              <label htmlFor="expiryDate">Expiry</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="input-box-exp"
                placeholder="MM"
                maxLength="2"
                required
              />
              </div>
              <pre>/</pre>
              <div className="form-group col-md-9">
              <label htmlFor="expiryDate"> Date</label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="input-box-exp"
                placeholder="YY"
                maxLength="2"
                required
              />
            </div>
            <div className="form-group col-md-7">
              <label htmlFor="cvv">CVV Code</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                className="input-box-cvv"
                maxLength="3"
                required
              />
            </div>
          </div>
        </form>
      </div>
      <button>Pay</button>
    </div>
    </div>
    <div className='personal-info'>
      <div className='personal-group'>
        <div className='personal-group-form'>
          <h1>Personal Details</h1><br></br><br></br>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input 
              type="text" 
              id="name" 
              name='fname'
              value={formData.name}
              onChange={handleInputChange}
              placeholder="First Name"
              required
              />
              <input 
              type="text" 
              id="name" 
              name='lname'
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Last Name"
              required
              />
            </div>
            <div className="form-2">
              <select>
                <option>Select Country</option>
                <option>America</option>
                <option>India</option>
                <option>Australia</option>
                <option>Oman</option>
                <option>China</option>
                <option>Japan</option>
              </select>
            </div>
            <div className="form-4">
              <input
              type="text"
              id="city"
              name="City"
              value={formData.address}
              onChange={handleInputChange}
              placeholder='City'
              className="input-1"
              required
            />
              <input
              type="text"
              id="zipCode"
              name="ZipCode"
              value={formData.address}
              onChange={handleInputChange}
              placeholder='Zip Code'
              className="input-1"
              required
            />
            </div>
            <div className="form-5">
              <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Email ID'
              className="input-box-1"
              required
              />
              </div>
            <div className="form-6">
              <input
              type="number"
              id="phone-number"
              name="PhoneNumber"
              value={formData.address}
              onChange={handleInputChange}
              placeholder='Phone Number'
              className="input-box-1"
              required
            />
            </div>
          </form>        
        </div>
      </div>
    </div>
    </div>
  );
};

export default CreditCardPayment;
