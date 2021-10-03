import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';

export function* createSuperheroSaga(action) {
  yield put({ type: ACTION.SUPERHEROES_REQUEST });
  try {
    const formData = new FormData();
    action.data.images.forEach(image =>{
      formData.append('superheroImages[]', image)
    })
    formData.append('superheroData', JSON.stringify(action.data))
    const {data} = yield restController.createSuperhero(formData)
    yield put({ type: ACTION.CREATE_SUPERHERO_SUCCESS, data: data })
  } catch (err) {
    yield put({ type: ACTION.SUPERHEROES_REQUEST_ERROR, error: err.response })
  }
}

export function* getSuperheroesSaga(action) {
  yield put({ type: ACTION.SUPERHEROES_REQUEST });
  try {
    const {data} = yield restController.getSuperheroes()
    yield put({ type: ACTION.GET_SUPERHEROES_SUCCESS, data: data})
  } catch (err) {
    yield put({ type: ACTION.SUPERHEROES_REQUEST_ERROR, error: err.response })
  }
}

export function* getSuperheroSaga(action) {
  yield put({ type: ACTION.SUPERHEROES_REQUEST });
  try {
    const {data} = yield restController.getSuperhero(action.data)
    yield put({ type: ACTION.GET_SUPERHERO_SUCCESS, data: data})
  } catch (err) {
    yield put({ type: ACTION.SUPERHEROES_REQUEST_ERROR, error: err.response })
  }
}

export function* updateSuperheroSaga(action) {
  yield put({ type: ACTION.SUPERHEROES_REQUEST });
  try {
    const formData = new FormData();
    action.data.images.forEach(image =>{
      if(typeof image === 'string'){
        formData.append('superheroExistingImages[]', image)
      } else if(typeof image === 'object'){
        formData.append('superheroNewImages[]', image)
      }
    })
    formData.append('superheroData', JSON.stringify(action.data))
    const { data } = yield restController.updateSuperhero(formData)
    yield put({ type: ACTION.UPDATE_SUPERHERO_SUCCESS, data: data})
  } catch (err) {
    yield put({ type: ACTION.SUPERHEROES_REQUEST_ERROR, error: err.response })
  }
}

export function* deleteSuperheroSaga(action) {
  yield put({ type: ACTION.SUPERHEROES_REQUEST });
  try {
    yield restController.deleteSuperhero(action.data)
    yield put({ type: ACTION.DELETE_SUPERHERO_SUCCESS})
  } catch (err) {
    yield put({ type: ACTION.SUPERHEROES_REQUEST_ERROR, error: err.response })
  }
}