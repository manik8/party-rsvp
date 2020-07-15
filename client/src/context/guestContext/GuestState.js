import React, {useReducer} from 'react'
import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import { TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH } from '../types';

const GuestState = (props) => {
    const initialState = {
        filterGuest: false,
        search: null,
        guests: [
            {
                id: 1,
                name: "Manik Sharma",
                phone: "7018901240",
                dietary: "Vegan",
                isConfirmed: true
            },
            {
                id: 2,
                name: "Mannat Gupta",
                phone: "7018901240",
                dietary: "Non-Veg",
                isConfirmed:  false
            },
            {
                id: 1,
                name: "Yash rai",
                phone: "7018901240",
                dietary: "Pascatarian",
                isConfirmed: true
            }
        ]
    }

    const [ state, dispatch ] = useReducer(guestReducer, initialState);
    const toggleFilter = () => {
        dispatch({
            type: TOGGLE_FILTER
        });
    }

    const searchGuest = (guest) => {
        dispatch({
            type: SEARCH_GUEST,
            payload: guest
        })
    }

    const clearSearch = () => {
        dispatch({
            type: CLEAR_SEARCH
        })
    }
    return (
        <GuestContext.Provider value={{ 
            guests: state.guests,
            search: state.search,
            toggleFilter,
            searchGuest,
            clearSearch,
            filterGuest: state.filterGuest
        }}>{props.children}</GuestContext.Provider>
    )
}

export default GuestState;
