import types from "./types";
import axios from 'axios';

import db from '../api/db.json';

export function getBook() {
    // return (dispatch) => {
    //     axios.get("http://localhost:3000/books")
    //         .then(resp => {
    //             dispatch({
    //                 type: types.GET_BOOK,
    //                 payload: resp.data[0],
    //             })
    //     })
    // }
    return {
        type: types.GET_BOOK,
        payload: db
    }
}

export function selectWord( id ) {
    return (dispatch) => {
        dispatch({
            type: types.SELECT_WORD,
            payload: db.word_list[id]
        })
    }
}

export function toggleComplete ( id ) {
    return {
        type: types.TOGGLE_COMPLETE,
        id: id
    }
}
