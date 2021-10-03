import React from 'react';
import Button from '@mui/material/Button';
import styles from './Navigation.module.sass'

const Navigation = (props) => {
    return (
        <div className = {styles.navigation}>
            <Button variant="contained" href = {props.href}>{props.name}</Button>
        </div>
    );
}

export default Navigation;