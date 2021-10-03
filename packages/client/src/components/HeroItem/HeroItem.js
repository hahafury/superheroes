import React from 'react';
import CONSTANTS from '../../constants/index'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import stub from '../../staticImages/stub.png';
import styles from './HeroItem.module.sass';

const HeroItem = (props) => {
    const { nickname, img, id } = props
    return (
        <a className = {styles.linkToHeroInfo}href = {'/superhero/' + id}>
            <Card sx={{ width: 300 }}>
                <CardMedia
                component="img"
                height="140"
                image = {img ? CONSTANTS.PUBLIC_URL + img : stub}
                alt="hero image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {nickname}
                    </Typography>
                </CardContent>
            </Card>
        </a>
    );
}


export default HeroItem;
