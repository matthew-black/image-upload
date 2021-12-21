import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchImages(action) {
  const response = yield axios({
    method: 'GET',
    url: '/api/images'
  })
  yield put({
    type: 'SET_IMAGES',
    payload: response.data
  })
}

function* uploadImage(action) {
  const headers = {
      'content-type': 'multipart/form-data'
    }
  const response = yield axios({
    method: 'POST',
    url: '/api/images',
    headers: headers,
    data: action.payload
  })
  yield put({
    type: 'FETCH_IMAGES'
  })
}

function* imagesSaga() {
  yield takeLatest('FETCH_IMAGES', fetchImages);
  yield takeLatest('UPLOAD_IMAGE', uploadImage);
}


export default imagesSaga;
