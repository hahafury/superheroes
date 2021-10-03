import React from 'react';
import HeroContainer from '../../components/HeroContainer/HeroContainer';
import Navigation from '../../components/Navigation/Navigation';

const Superheroes = () => {
    return (
        <>
            <Navigation href = '/createHero' name = {'Create hero'}/>
            <HeroContainer/>
        </>
    );
}

export default Superheroes;