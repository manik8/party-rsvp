import React, {useReducer} from 'react'
import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import { TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH, ADD_GUEST, REMOVE_GUEST, UPDATE_GUEST, EDIT_GUEST, CLEAR_EDIT } from '../types';
import { v1 as uuidv1 } from 'uuid';

const GuestState = (props) => {
    const initialState = {
        filterGuest: false,
        search: null,
        edit: null,
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
                id: 3,
                name: "Yash rai",
                phone: "7018901240",
                dietary: "Pascatarian",
                isConfirmed: true
            }
        ]
    }

    const [ state, dispatch ] = useReducer(guestReducer, initialState);

    const addGuest = (guest) => {
        guest.id = uuidv1();
        guest.isConfirmed=false;

        dispatch({
            type: ADD_GUEST,
            payload: guest
        })
    }

    const removeGuest = (id) => {
        dispatch({
            type: REMOVE_GUEST,
            payload: id
        })
    }

    const updateGuest = (guest) => {
        dispatch({
            type: UPDATE_GUEST,
            payload: guest
        })
    }

    const editGuest = (guest) => {
        dispatch({
            type: EDIT_GUEST,
            payload: guest
        })
    }

    const clearEdit = () => {
        dispatch({
            type: CLEAR_EDIT,
        })
    }
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
            edit: state.edit,
            toggleFilter,
            searchGuest,
            clearSearch,
            addGuest,
            removeGuest,
            updateGuest,
            editGuest,
            clearEdit,
            filterGuest: state.filterGuest
        }}>{props.children}</GuestContext.Provider>
    )
}

export default GuestState;
