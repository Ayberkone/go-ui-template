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
        },
        '& p': {
            color: 'white',
            margin: '10px',
            fontSize: '1.5em',
        },
        '& a': {
            height: '100%',
            display: 'block',
            zIndex: 1,
            textDecoration: 'none',
            '&:hover': {
                zIndex: 9,
                '& img:first-child': {
                    filter: 'drop-shadow(-0.5em 0 0.5em crimson) drop-shadow(0.5em 0 0.5em crimson)',
                },
                '& p:first-child': {
                    transition: 'font-size 0.3s',
                    fontSize: '2em',
                    color: 'wheat',
                },
                '& p:nth-child(2)': {
                    transition: 'padding .3s',
                    visibility: 'visible',
                    padding: '0.8em 0.6em',
                    margin: 0,
                },
            },
        }
    },
    header: {
        position: "relative",
        width: "100%",
        backgroundImage: 'linear-gradient(transparent 0%, rgba(0,0,0,0.8) 100%)',
        '& p': {
            transition: 'font-size 0.3s',
        },
        '& p:first-child': {
            textShadow: '2px 2px 0px black',
        },
        '& p:nth-child(2)': {
            visibility: 'hidden',
            textShadow: '0 0 5px black',
        },
    },
    image: {
        maxWidth: '100%'
    },
    description: {
        position: "relative",
        width: "100%",
        '& pre': {
            whiteSpace: 'pre-line',
            fontSize: '1.3em',
            color: 'wheat',
        },
    }
}));

const WideCard = props => {
    const classes = useStyles();
    const { item, image, header, description } = classes;

    const { data } = props;
    const card = useCard(data);

    const [url, setUrl] = useState(null);
    const [title, setTitle] = useState(null);
    const categoryList = card.categoryList;
    const card_description = card.description;

    useEffect(() => {
        const { url, header, card_description } = card;
        setUrl(url);
        setTitle(header);
    }, [card]);

    return (
        <div className={item} >
            <a href={card.game_url} target='_blank'>
                <img className={image} src={url} />
                <div className={header}>
                    <p>{title}</p>
                    <p>{categoryList && categoryList[0].name}{(categoryList && categoryList.length > 1) && (' / ' + categoryList[1].name)}</p>
                </div>
                <div className={description}>
                    <pre>{card_description}</pre>
                </div>
            </a>
        </div>
    )
}

export default WideCard;