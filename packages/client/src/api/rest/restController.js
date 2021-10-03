import http from '../intercaptor';

export const createSuperhero = (formData) => http.post('/createSuperhero', formData, {
    headers: {
        'Content-type': 'multipart/form-data'
    }
})

export const getSuperheroes = () => http.get('/getSuperheroes')

export const getSuperhero = (data) => http.get('/getSuperheroById', {
    headers:{
        superheroId: data
    }
})

export const updateSuperhero = (data) => http.put('/updateSuperhero',data)

export const deleteSuperhero = (data) => http.delete('/deleteSuperhero', {
    headers: {
        superheroId: data
    }
})