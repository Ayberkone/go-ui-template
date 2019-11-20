import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import { useGameCollection } from '../Hook/index';
import { TightCard } from '../Card/index';

const useStyles = makeStyles(theme => ({
    box: {
        display: "grid",
        gridGap: '20px',
        gridTemplateColumns: 'repeat(6, minmax(100px, 1fr))',
        [theme.breakpoints.up('xs')]: {
            gridTemplateColumns: 'repeat(2, minmax(100px, 1fr))',
        },
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, minmax(100px, 1fr))',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))',
        },
        [theme.breakpoints.up('lg')]: {
            display: "grid",
            gridGap: '20px',
            gridTemplateColumns: 'repeat(6, minmax(100px, 1fr))',
        },
    }
}));

const TightList = props => {
    const classes = useStyles();
    const { box } = classes;

    const { collection } = props;
    const list = useGameCollection(collection);

    return (
        <div className={box} >
            {   
                list.map((item, index) => <TightCard data={item} key={index} />)
            }
        </div>
    )
}

export default TightList;