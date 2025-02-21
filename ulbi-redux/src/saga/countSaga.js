import { put, takeEvery } from 'redux-saga/effects';
import { addCashAction, ASYNC_ADD_CASH } from '../store/cashReducer';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* addCashWorker() {
    yield delay(1000);
    yield put(addCashAction());
}

function* decrementWorker() {}

function* cashWatcher() {
    yield takeEvery(ASYNC_ADD_CASH, addCashWorker);
}
