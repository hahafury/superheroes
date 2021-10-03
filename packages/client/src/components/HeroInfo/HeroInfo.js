import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getSuperheroById, changeHeroInfoMode, deleteSuperhero } from '../../actions/actionCreator';
import ImageList from '@mui/material/ImageList';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import CONSTANTS from '../../constants/index';
import styles from './HeroInfo.module.sass'
import HeroForm from '../HeroForm/HeroForm';
import Navigation from '../../components/Navigation/Navigation';
import { Redirect } from 'react-router';

const HeroInfo = (props) => {
    const {
        getSuperhero, 
        superheroData, 
        isEdit, 
        match, 
        changeHeroInfoMode,
        deleteSuperhero,
        isDeleted
    } = props

    useEffect(() =>{
        getSuperhero(parseInt(match.params.superheroId))
    },[])

    return (
        <div className = {styles.heroInfoContainer}>
            {
                isDeleted && <Redirect to = '/'/>
            }
            {
                Object.keys(superheroData).length !== 0 ?
                ( !isEdit ? (
                    <>
                        <Navigation href = '/' name = {'Home'}/>
                        <div className = {styles.heroInfoSection}><strong>Name: </strong>{superheroData.nickname}</div>
                        <div className = {styles.heroInfoSection}><strong>Real name: </strong>{superheroData.real_name}</div>
                        <div className = {styles.heroInfoSection}><strong>Origin description: </strong>{superheroData.origin_description}</div>
                        <div className = {styles.heroInfoSection}><strong>Superpowers: </strong>{superheroData.superpowers}</div>
                        <div className = {styles.heroInfoSection}><strong>Catch phrase: </strong>{superheroData.catch_phrase}</div>
                        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} children = {1}>
                            {
                                superheroData.images && (
                                    superheroData.images.map((image, i) => (
                                        <ImageListItem key = {i}>
                                            <img
                                                src={`${CONSTANTS.PUBLIC_URL}/${image}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${CONSTANTS.PUBLIC_URL}/${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={superheroData.nickname}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    )))
                            }
                        </ImageList>
                        <Button variant="contained" onClick = {() => changeHeroInfoMode()}>Edit</Button>
                        <Button variant="contained" onClick = {() => deleteSuperhero(match.params.superheroId)}>Delete superhero</Button>
                    </>
                ) : <HeroForm superheroData = {superheroData}/>) : (
                    <>
                        <Navigation href = '/' name = {'Home'}/>
                        'Superhero not found!'
                    </>
                    )
            }
        </div>
    )
}

const mapStateToProps = (state) => state.heroesReducer;

const mapDispatchToProps = (dispatch) => ({
    getSuperhero: (data) => dispatch(getSuperheroById(data)),
    changeHeroInfoMode: () => dispatch(changeHeroInfoMode()),
    deleteSuperhero: (data) => dispatch(deleteSuperhero(data))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(HeroInfo);