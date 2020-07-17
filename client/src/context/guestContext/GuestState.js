import React, {useReducer} from 'react';
import axios from 'axios';
import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import { TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH, ADD_GUEST, REMOVE_GUEST, UPDATE_GUEST, EDIT_GUEST, CLEAR_EDIT, GET_GUEST, GET_ERROR } from '../types';
import { v1 as uuidv1 } from 'uuid';

const GuestState = (props) => {
    const initialState = {
        filterGuest: false,
        search: null,
        edit: null,
        guests: [],
        errors: null
    }

    const [ state, dispatch ] = useReducer(guestReducer, initialState);

    const getGuest = async() => {
        try {
            const res = await axios.get('/guests');
            dispatch({
                type: GET_GUEST,
                payload: res.data
            })
        } catch(err) {
            dispatch({
                type: GET_ERROR,
                payload: err.response.msg
            })
        }
    }

    const addGuest = async(guest) => {
        //guest.id = uuidv1();

        const config = {
            'Content-Type': 'application/json'
        }
        try {
            const res = await axios.post('/guests',guest,config);
            dispatch({
            type: ADD_GUEST,
            payload: res.data
        });
        } catch(err) {
            dispatch({
                type: GET_ERROR,
                payload: err.response.msg
            })
        }
        
    }

    const removeGuest = async(id) => {
        try {
            await axios.delete(`/guests/${id}`);
            dispatch({
                type: REMOVE_GUEST,
                payload: id
            });
        } catch(err) {
            dispatch({
                type: GET_ERROR,
                payload: err.response.msg
            })
        }
    }

    const updateGuest = async(guest) => {
        const config = {
            'Content-Type': 'application/json'
        }
        try {
            const res = await axios.put(`/guests/${guest._id}`, guest, config);
            dispatch({
                type: UPDATE_GUEST,
                payload: res.data
            });
        } catch(err) {
            dispatch({
                type: GET_ERROR,
                payload: err.response.msg
            });
        }
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
            getGuest,
            filterGuest: state.filterGuest
        }}>{props.children}</GuestContext.Provider>
    )
}

export default GuestState;
