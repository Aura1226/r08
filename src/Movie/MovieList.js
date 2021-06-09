import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MovieItem from './MovieItem';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1)
    },
  },
}));

const MovieList = () => {

    const classes = useStyles();

    const movieList = useSelector(state => state.movie.movies)

    const list = movieList.map( (m, i) => <MovieItem key={i} {...m}></MovieItem>)

    return ( 
    <div className={classes.root}>
      {list}
    </div>
     );
}
 
export default MovieList;