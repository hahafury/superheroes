import React from 'react';
import HeroItem from '../HeroItem/HeroItem';
import styles from './HeroList.module.sass';

const HeroList = (props) => {
    const { superheroes } = props

    return (
        <div className = {styles.heroList}>
            {   
                superheroes.map((e,i)=>{
                    return <HeroItem key = {e.id} id = {e.id} img = {e.images[0]} nickname = {e.nickname}/>
                })
            }
        </div>
    );
}

export default HeroList;
