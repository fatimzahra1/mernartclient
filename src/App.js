import React, {useEffect, useState} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import memories from './images/film.png';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/Posts';
import Form from './components/Forms/Forms';
import Posts from './components/Posts/Posts';
import useStyles from './styles';


const App = ()=> {
    const [posts, setPosts] = useState([])
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts())
    }, [dispatch])

    function newPosts(posts){
        setPosts(posts)
    }
    useEffect(()=>{
        setPosts(posts)
    }, [posts])

    return (
       <Container maxWidth="lg">
           <AppBar className={classes.appBar} position="static" color="inherit">
               <Typography className={classes.heading} variant="h2" align="center" >
                    Gallerie Of Art
               </Typography>
               <img className={classes.image} src={memories} alt="memories" height="60" ></img>
           </AppBar>
           <Grow in>
               <Container>
                   <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                   <Grid item xs={12} sm={4}>
                            <Form newPosts={newPosts}/>
                        </Grid>
                        
                        <Grid item xs={12} sm={7}>
                            <Posts posts={posts}/>
                        </Grid>
                        
                   </Grid>
               </Container>
           </Grow>

       </Container>
    )
}

export default App;