import {
    ADD_TICKET_DETAILS_COMMENT, TICKET_DETAILS_ACTION
} from "../../tickets/constants/ReducerConstants";
import {ACTION_STATUS_FORM_FIELD_CHANGE, ACTION_STATUS_RESET, getAction} from "../../../global/constants/action-types";

const initialState = {
    changeEditMode: false,
    ticketNumber: "15741",
    ticketName: "Payed twice for the invoice",
    clientName: "Peeter Goldberg",
    assignee: "Ilja Andrejev",
    createdBy: "Kristo Truu",
    createdAt: "12.08.2019 16:49:00",
    updatedAt: null,
    status: "Open",
    invoiceNumber: "4234235235235",
    type: "Payments",
    priority: "Medium",
    description: "Money was withdrawn twice from a bank. " +
        "The amount was high and the client asks to hurry up with the return of funds.",
    comments: [
        {
            datetime: "16.08.2019 16:56:42",
            text: "1.Client sent additional information to the email."
        },
        {
            datetime: "13.08.2019 13:56:42",
            text: "2.Client said that the problem is still not resolved."
        }
    ],
    selectedTicket: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TICKET_DETAILS_COMMENT:
            if (action.payload.length > 0) {
                return {
                    ...state,
                    comments: [...state.comments,
                        {
                            datetime: new Date().toLocaleString(),
                            text: action.payload
                        }
                    ],
                    updatedAt: new Date().toLocaleString()
                };
            } else {
                return {
                    ...state
                }
            }
        case getAction(TICKET_DETAILS_ACTION, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value,
                updatedAt: new Date().toLocaleString()

            };
        case getAction(TICKET_DETAILS_ACTION, ACTION_STATUS_RESET):
            return initialState;
        default:
            return state
    }
}
