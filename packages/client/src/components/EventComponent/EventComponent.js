import Alert from '@mui/material/Alert';
import React from 'react';
import styles from './EventComponent.module.sass'
import CloseIcon from '@mui/icons-material/Close';

const EventComponent = (props) => {

    if(props.error) {
        return (
            <>
                <CloseIcon className = {styles.closeButton} onClick = {() => props.handleCloseNotification()}/>
                <Alert className = {styles.eventComponent} severity="error">{props.error.status} {props.error.statusText}</Alert>
            </>
        )
    } else{
        return (
            <>
                <CloseIcon className = {styles.closeButton} onClick = {() => props.handleCloseNotification()}/>
                <Alert className = {styles.eventComponent} severity="success">{props.success}</Alert>
            </>
        )
    }
}

export default EventComponent;