import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { WideList, TightList } from '../CardList/index';
import { useGameCollectionRSS } from '../Hook/index';

const useStyles = makeStyles(theme => ({
    root: {
        background: "#270000",
        width: "100%",
        minHeight: '100vh',
    },
    mainContainer: {
        padding: '5em',
        [theme.breakpoints.up('xs')]: {
            padding: '2em',
        },
        [theme.breakpoints.up('sm')]: {
            padding: '2em',
        },
        [theme.breakpoints.up('md')]: {
            padding: '3em',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '4em',
        },
    },
}));

function Home(props) {

    const classes = useStyles();
    const { root } = classes;
    const { mainContainer } = classes;

    const { data } = props;
    const view = props.view;
    const { game } = data;

    const collectionFew = useGameCollectionRSS(game.gameFew);
    const collectionLot = useGameCollectionRSS(game.gameLot);

    return (
        <div className={root}>
            <div className={mainContainer}>
                {
                    view === 'tight' ? <TightList collection={collectionLot} view={view} /> : null
                }
                {
                    view === 'wide' ? <WideList collection={collectionFew} view={view} /> : null
                }
            </div>
        </div>
    );
}


export default Home;
