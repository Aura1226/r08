import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./movieSlice";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MovieList from "./MovieList";
import MsgPanel from "./MsgPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MovieBoard = () => {

    const classes = useStyles();
    
    //const movieList = useSelector(state => state.movie.movies)

    const dispatch = useDispatch()
    
    //useEffect 자체가 비동기
    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return ( 
        <div className={classes.root}>
            <MsgPanel></MsgPanel>
            <Grid container spacing={3}>
            <Grid item xs={8}>
            <MovieList></MovieList>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
        </Grid>
        </div>
     );
}
 
export default MovieBoard;