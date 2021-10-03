import React from 'react';
import HeroContainer from '../../components/HeroContainer/HeroContainer';
import HeroForm from '../../components/HeroForm/HeroForm';
import Navigation from '../../components/Navigation/Navigation';

const SuperheroForm = () => {
    return (
        <>
            <Navigation href = '/createHero' name = {'Create hero'}/>
            <HeroForm/>
        </>
    );
}

export default SuperheroForm;