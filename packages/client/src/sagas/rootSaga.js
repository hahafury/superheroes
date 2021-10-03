import { takeLeading, takeEvery } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { 
    createSuperheroSaga, 
    getSuperheroesSaga, 
    getSuperheroSaga, 
    updateSuperheroSaga ,
    deleteSuperheroSaga,
} from './superheroSaga';

function* rootSaga() {
    yield takeEvery(ACTION.DELETE_SUPERHERO, deleteSuperheroSaga)
    yield takeLeading(ACTION.CREATE_SUPERHERO, createSuperheroSaga)
    yield takeLeading(ACTION.GET_SUPERHERO, getSuperheroSaga)
    yield takeEvery(ACTION.GET_SUPERHEROES, getSuperheroesSaga)
    yield takeLeading(ACTION.UPDATE_SUPERHERO, updateSuperheroSaga)
}

export default rootSaga;
