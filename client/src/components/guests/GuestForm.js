import React, { useState, useContext, useEffect } from 'react';
import GuestContext from '../../context/guestContext/guestContext';

export default function GuestForm() {

  const { addGuest, edit } = useContext(GuestContext);

  useEffect(() => {
    if(edit !== null) {
      setGuest(edit);
    } else {
      setGuest({
        name: '',
        phone: '',
        dietary: 'Non-Veg'
      });
    }
  }, [ edit ]);
  const [ guest, setGuest ] = useState({
    name: '',
    phone: '',
    dietary: 'Non-Veg'
  });

  if(edit !== null) {
    console.log(edit);
  }
  const  { name, phone, dietary } = guest;

  const handleChange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value,
    })
  }
  const onSubmit = (e) =>{
    e.preventDefault();

    addGuest(guest);

    setGuest({
      name: '',
      phone: '',
      dietary: 'Non-Veg'
    })
  }
    return (
        <div className="invite-section">
      <h1>Invite Someone</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} required />
        <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange} required />
        <p className="options-label">Dietary</p>
        <div className="options">
          <label className="container">Non-veg
        <input type="radio" name="dietary" value='Non-Veg' checked={dietary==='Non-Veg'} onChange={handleChange} />
            <span className="checkmark"></span>
          </label>
          <label className="container">Vegan
        <input type="radio" name="dietary" value='Vegan' onChange={handleChange} checked={dietary==='Vegan'} />
            <span className="checkmark"></span>
          </label>
          <label className="container">Pascatarian
        <input type="radio" name="dietary" value='Pesacatarian' onChange={handleChange} checked={dietary==='Pascatarian'}/>
            <span className="checkmark"></span>
          </label>
        </div>
        <input type="submit" value="Add Guest" className="btn" />
      </form>
    </div>
    )
}
