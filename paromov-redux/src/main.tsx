import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App, { Counter } from './App.tsx';
import './index.css';
import { store } from './store.ts';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
        <Counter counterId="fourth" />
    </Provider>
);
