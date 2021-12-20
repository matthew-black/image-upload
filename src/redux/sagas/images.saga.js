import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchImages(action) {
  // GET /images
  const response = yield axios({
    method: 'GET',
    url: '/api/images'
  })
  // put 'SET_IMAGES'
  yield put({
    type: 'SET_IMAGES',
    payload: response.data
  })
}

function* imagesSaga() {
  yield takeLatest('FETCH_IMAGES', fetchImages);
}

export default imagesSaga;
