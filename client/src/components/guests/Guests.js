import React, { useContext } from 'react'
import Guest from './Guest.js';
import GuestContext from '../../context/guestContext/guestContext';

export default function Guests() {
    const { guests, filterGuest, search } = useContext(GuestContext);
    return (
        <div>
            <div className="guests">
                {
                    search !== null ? search.map(guest => <Guest key={guests.id} guest={guest} />) :
                    guests.filter(guest => !filterGuest || guest.isConfirmed).map(guest => {
                        return (
                            <Guest key={guests.id} guest={guest} />
                        );
                    })
                }
            </div>
        </div>
    )
}
