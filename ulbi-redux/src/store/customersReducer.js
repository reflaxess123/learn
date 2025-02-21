const defaultState = {
    customers: [],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const ADD_MANU_CUSTOMERS = 'ADD_MANU_CUSTOMERS';

export const customersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANU_CUSTOMERS:
            return {
                ...state,
                customers: [...state.customers, ...action.payload],
            };
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload],
            };
        case REMOVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(
                    (c) => c.id !== action.payload.id
                ),
            };
        default:
            return state;
    }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const addManyCustomesAction = (payload) => ({
    type: ADD_MANU_CUSTOMERS,
    payload,
});
export const removeCustomerAction = (payload) => ({
    type: REMOVE_CUSTOMER,
    payload,
});
