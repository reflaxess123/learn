import { addManyCustomesAction } from '../store/customersReducer';

export const fetchCustomers = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => dispatch(addManyCustomesAction(json)));
    };
};
