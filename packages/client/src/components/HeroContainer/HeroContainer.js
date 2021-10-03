import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import { getSuperheroes } from '../../actions/actionCreator'
import HeroList from '../HeroList/HeroList';
import Pagination from '@mui/material/Pagination';
import styles from './HeroContainer.module.sass';
const HeroContainer = (props) => {
    const { getSuperheroes, params, superheroes } = props
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() =>{
        getSuperheroes(params)
    },[])

    const pageCount = (superheroesArray, limitSuperheroPerPage) => {
        return Math.ceil(superheroesArray.length / limitSuperheroPerPage)
    }

    const lastIndex = currentPage * params.limit
    const firstIndex = lastIndex - params.limit

    return (
        <div className = {styles.heroContainer}>
            <HeroList superheroes = {superheroes.slice(firstIndex, lastIndex)}/>
            <Pagination count={pageCount(superheroes, params.limit)} color="primary" onChange = {(event,value) => setCurrentPage(value)} />
        </div>
    );
}

const mapStateToProps = (state) => state.heroesReducer;

const mapDispatchToProps = (dispatch) => ({
    getSuperheroes: (data) => dispatch(getSuperheroes(data))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer);
