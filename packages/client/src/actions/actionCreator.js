import ACTION from './actionTypes';

export const createSuperhero = (data) => ({
    type: ACTION.CREATE_SUPERHERO,
    data,
})

export const updateSuperhero = (data) => ({
    type: ACTION.UPDATE_SUPERHERO,
    data,
})

export const deleteSuperhero = (data) => ({
    type: ACTION.DELETE_SUPERHERO,
    data,
})

export const getSuperheroes = (data) => ({
    type: ACTION.GET_SUPERHEROES,
    data,
})

export const getSuperheroById = (data) => ({
    type: ACTION.GET_SUPERHERO,
    data,
})

export const clearNotification = () => ({
    type: ACTION.CLEAR_NOTIFICATION,
})

export const changeHeroInfoMode = () => ({
    type: ACTION.CHANGE_HERO_INFO_MODE,
})
