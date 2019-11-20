import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import { useCard } from '../Hook/index';

const useStyles = makeStyles(theme => ({
    item: {
        color: "white",
        font: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        "& > img": {
            width: "100%",
            height: "100%",
            objectFit: 'cover',
        },
        '& a': {
            transition: "transform .3s, z-index .3s",
            height: '100%',
            display: 'flex',
            zIndex: 1,
            textDecoration: 'none',
            maxHeight: '200px',
            overflow: 'hidden',
            '&:hover': {
                transition: 'transform .3s',
                msTransform: 'scale(1.4)',
                transform: 'scale(1.4)',
                zIndex: 9,
                filter: 'drop-shadow(-0.5em 0 0.5em crimson) drop-shadow(0.5em 0 0.5em crimson)',
                '& p': {
                    transition: 'font-size 0.3s',
                    fontSize: '1.2em',
                },
                '& p:first-child': {
                    fontSize: '0.8em',
                    visibility: 'visible',
                },
            },
        }
    },
    header: {
        position: "absolute",
        width: "100%",
        bottom: "0",
        left: "0",
        backgroundImage: 'linear-gradient(transparent 0%, rgba(0,0,0,0.8) 100%)',
        '& p': {
            color: 'white',
            margin: '10px',
            transition: 'font-size 0.3s',
        },
        '& p:first-child': {
            visibility: 'hidden',
            textShadow: '0 0 5px black',
        },
        '& p:not(:first-child)': {
            textShadow: '2px 2px 0px black',
        },
    },
    image: {
        maxWidth: '100%'
    }
}));

const TightCard = props => {
    const classes = useStyles();
    const { item, image, header } = classes;

    const { data } = props;
    const card = useCard(data);

    const [url, setUrl] = useState(null);
    const [title, setTitle] = useState(null);
    const categoryList = card.categoryList;

    useEffect(() => {
        const { url, header } = card;
        setUrl(url);
        setTitle(header);
    }, [card]);

    return (
        <div className={item} >
            <a href={card.game_url} target='_blank'>
                <img className={image} src={url} />
                <div className={header}>
                    <p>{categoryList && categoryList[0].name}{(categoryList && categoryList.length > 1) && (' / ' + categoryList[1].name)}</p>
                    <p>{title}</p>
                </div>
            </a>
        </div>
    )
}

export default TightCard;