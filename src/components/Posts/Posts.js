import React, { useState , useEffect} from "react"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/Posts";
import CopyrightIcon from '@mui/icons-material/Copyright';


import { useSelector} from 'react-redux'

import './Posts.css'
import Post from '../Posts/Post/Post'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Fatimzahra
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album(props) {
  //const posts = useSelector((state) => state.posts)
  

  const [posts, setPosts] = useState(props.posts)

  const dispatch = useDispatch();

  useEffect(async  () => {
    
  const data =await dispatch(getPosts())
 setPosts(data.payload)
  
   }, [])
 




  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
       
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={7}>
            {posts.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4}>

       <Post creator={item.creator} createdAt={item.createdAt} titel={item.title} message={item.message} tags={item.tags} selectedFile={item.selectedFile}/>

     </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}