import { useDispatch } from 'react-redux';
import './App.css';
import reactLogo from './assets/react.svg';
import {
    CounterId,
    DecrementAction,
    InrementAction,
    selectCounter,
    useAppSelector,
} from './store';
import viteLogo from '/vite.svg';

function App() {
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <Counter counterId="first" />
            <Counter counterId="second" />
            <Counter counterId="thrird" />
            <div className="card">
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export function Counter({ counterId }: { counterId: CounterId }) {
    const dispatch = useDispatch();
    const counterState = useAppSelector((state) =>
        selectCounter(state, counterId)
    );

    console.log('rerender' + counterId);
    return (
        <>
            counter {counterState?.counter ?? 0}
            <button
                onClick={() =>
                    dispatch({
                        type: 'increment',
                        payload: { counterId },
                    } satisfies InrementAction)
                }
            >
                increment
            </button>
            <button
                onClick={() =>
                    dispatch({
                        type: 'decrement',
                        payload: { counterId },
                    } satisfies DecrementAction)
                }
            >
                decrement
            </button>
        </>
    );
}

export default App;
