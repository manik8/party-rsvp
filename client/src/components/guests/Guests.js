import React, { useContext, useEffect } from 'react'
import Guest from './Guest.js';
import GuestContext from '../../context/guestContext/guestContext';

export default function Guests() {
    const { guests, filterGuest, search, getGuest } = useContext(GuestContext);
    useEffect(() => {
        getGuest();
    },[])
    return (
        <div>
            <div className="guests">
                {
                    search !== null ? search.map(guest => <Guest key={guests._id} guest={guest} />) :
                    guests.filter(guest => !filterGuest || guest.isconfirmed).map(guest => {
                        return (
                            <Guest key={guests._id} guest={guest} />
                        );
                    })
                }
            </div>
        </div>
    )
}
