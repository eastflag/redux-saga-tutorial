import {delay} from "redux-saga";
import {all, put, takeEvery} from "redux-saga/effects";

export function* helloSaga() {
  console.log('Hello Sagas!');
}

// worker Saga: 비동기 증가 태스크를 수행할겁니다.
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// watcher Saga: 각각의 INCREMENT_ASYNC 에 incrementAsync 태스크를 생성할겁니다.
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// 모든 Saga들을 한번에 시작하기 위한 단일 entry point 입니다.
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
