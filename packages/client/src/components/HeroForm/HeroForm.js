import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { createSuperhero, clearNotification, updateSuperhero } from '../../actions/actionCreator';
import { useFormik } from 'formik';
import CONSTANTS from '../../constants/index'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './HeroForm.module.sass';
import EventComponent from '../EventComponent/EventComponent';
import Navigation from '../../components/Navigation/Navigation';


const HeroForm  = (props) => {
    const {
        isFetching, 
        error, 
        isEdit,
        successMessage, 
        createSuperhero, 
        clearNotification,
        updateSuperhero,
        superheroData
    } = props

    useEffect(()=>{
        if(Object.keys(superheroData).length !== 0){
            const fileUploader = document.getElementById('raised-button-file')
            props.superheroData.images.forEach(image =>{
                const newPreview = document.createElement('img')
                newPreview.className = 'imagePreview'
                newPreview.src = `${CONSTANTS.PUBLIC_URL}/${image}`
                fileUploader.value = ""
                newPreview.addEventListener('click',() => {
                    newPreview.remove();
                    formik.values.images.splice(formik.values.images.indexOf(image),1)
                })
                fileUploader.parentNode.insertBefore(newPreview, fileUploader.parentNode.lastChild)
            })
        }
    },[])

    const isSuperheroDataNotExists = () => {
        if(Object.keys(superheroData).length !== 0) return true
        else return false
    }

    const setInitialValues = (superheroData) => {
        return {
                nickname: isSuperheroDataNotExists(superheroData) ? superheroData.nickname : '',
                realName: isSuperheroDataNotExists(superheroData) ? superheroData.real_name : '',
                originDescription: isSuperheroDataNotExists(superheroData) ? superheroData.origin_description : '',
                superpowers: isSuperheroDataNotExists(superheroData) ? superheroData.superpowers : '',
                catchPhrase: isSuperheroDataNotExists(superheroData) ? superheroData.catch_phrase : '',
                images: isSuperheroDataNotExists(superheroData) ? superheroData.images : [],
        }
    }
    
    const formik = useFormik({
        initialValues: setInitialValues(props.superheroData) ,
        onSubmit: (values) => {
            if(isSuperheroDataNotExists()) values.id = props.superheroData.id
            isSuperheroDataNotExists() ? updateSuperhero(values) : createSuperhero(values)
        },
    })

    const onAddImages = (image, target) => {   
        const reader = new FileReader()
        const newPreview = document.createElement('img')
        reader.onload = () => {
            newPreview.className = 'imagePreview'
            newPreview.src = reader.result
        }
        document.getElementById('raised-button-file').value = ""
        formik.values.images.push(image)
        newPreview.addEventListener('click',() => {
            newPreview.remove();
            formik.values.images.splice(formik.values.images.indexOf(image),1)
        })
        reader.readAsDataURL(image)
        target.parentNode.insertBefore(newPreview, target.parentNode.lastChild)
    }

    return (
        <div className = {styles.heroFormContainer}>
            <Navigation href = '/' name = {'Home'}/>
            {
                error ? 
                    (<EventComponent 
                        handleCloseNotification = {clearNotification}
                        error={error}/>
                    ) : 
                    successMessage && 
                    (<EventComponent 
                        handleCloseNotification={clearNotification}
                        success={successMessage}/>
                    )
            }
            
            <form className = {styles.heroForm} onSubmit={formik.handleSubmit}>
                <div className = {styles.nameWrapper}>
                    <TextField
                        name="nickname"
                        label="Nickname"
                        value={formik.values.nickname}
                        onChange={formik.handleChange}
                        required
                    />
                    <TextField
                        name="realName"
                        label="Real name"
                        value={formik.values.realName}
                        onChange={formik.handleChange}
                        required
                    />
                </div>
                <TextField
                    name="originDescription"
                    label="Origin description"
                    value={formik.values.originDescription}
                    onChange={formik.handleChange}
                    multiline
                    rows = {4}
                    required
                />
                <TextField
                    name="catchPhrase"
                    label="Catch phrase"
                    multiline
                    rows = {4}
                    value={formik.values.catchPhrase}
                    onChange={formik.handleChange}
                    required
                />
                <TextField
                    name="superpowers"
                    label="Superpowers"
                    multiline
                    rows = {4}
                    value={formik.values.superpowers}
                    onChange={formik.handleChange}
                    required
                />
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    type="file"
                    name = "images"
                    onChange = {(e) => onAddImages(e.target.files[0], e.target)}
                />
                <label  htmlFor="raised-button-file">
                    <Button variant="raised" component="span">
                        Upload
                    </Button>
                </label>
                <Button color="primary" variant="contained" type="submit" >
                    {!isEdit ? (isFetching ? 'Submitting...' : 'Create') : (isFetching ? 'Submitting...' : 'Edit')}
                </Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => state.heroesReducer;

const mapDispatchToProps = (dispatch) => ({
    createSuperhero: (data) => dispatch(createSuperhero(data)),
    clearNotification: () => dispatch(clearNotification()),
    updateSuperhero: (data) => dispatch(updateSuperhero(data)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(HeroForm);
