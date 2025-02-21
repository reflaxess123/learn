import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncAction/customers';
import { addCashAction, getCashAction } from './store/cashReducer';
import {
    addCustomerAction,
    removeCustomerAction,
} from './store/customersReducer';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);
    console.log(cash);

    const addCash = (cash) => {
        dispatch(addCashAction(cash));
    };

    const getCash = (cash) => {
        dispatch(getCashAction(cash));
    };

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };

        if (customers.includes(customer.name)) {
            alert('Такой клиент уже существует');
            return;
        }

        dispatch(addCustomerAction(customer));
        console.log(customers);
    };

    const removeCustomer = (name) => {
        if (!customers.some((c) => c.name === name)) {
            alert('Клиента нет, введите другое имя');
            return;
        }

        const customer = customers.find((c) => c.name === name);
        dispatch(removeCustomerAction(customer));
    };

    const removeCustomerOnClick = (id) => {
        const customer = customers.find((c) => c.id === id);
        dispatch(removeCustomerAction(customer));
    };

    return (
        <div className="App">
            <div className="cash">
                <button onClick={() => addCash(Number(prompt()))}>
                    Пополнить счет
                </button>
                <div style={{ fontSize: 55 }}>{cash}</div>
                <button onClick={() => getCash(Number(prompt()))}>
                    Снять со счета
                </button>
            </div>

            <div className="customers">
                <button onClick={() => dispatch(fetchCustomers())}>
                    Получить клиентов из базы
                </button>
                <button onClick={() => addCustomer(prompt())}>
                    Добавить клиента
                </button>
                <div style={{ display: 'flex', columnGap: '55px' }}>
                    {customers.length > 0 ? (
                        <div className="customers__list">
                            {customers.map(({ name, id }, index) => (
                                <div
                                    className="customers__item"
                                    key={index}
                                    onClick={() => removeCustomerOnClick(id)}
                                >
                                    Name: {name}, id: {id}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="customers__item">
                            Клиенты отсутствуют
                        </div>
                    )}
                </div>
                <button onClick={() => removeCustomer(prompt())}>
                    Удалить клиента
                </button>
            </div>
        </div>
    );
}

export default App;
