import {TICKET_DETAILS_CREATE_COMMENT_ACTION} from "../constants/ReducerConstants";

export function addComment(comment) {
    return (dispatch) => dispatch({
        type: TICKET_DETAILS_CREATE_COMMENT_ACTION,
        payload: comment
    });
}