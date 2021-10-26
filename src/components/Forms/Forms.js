import { Button, Typography, Paper, TextField } from "@material-ui/core"
import React, { useState } from "react"
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import FileBase from 'react-file-base64'
import { useDispatch } from "react-redux";

import { createPost } from "../../actions/Posts";

import { getPosts } from "../../actions/Posts";

import './Form.css'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minheight: 60,
  lineHeight: '60px',
}));

const FormTest = (props) => {
  const [postData, setPostData] = useState({creator: '', title:'', message:'', tags:'',selectedFile:'' })

  const dispatch = useDispatch();

  const handleSubmit =async (e)=>{
     e.preventDefault(); 
     dispatch(createPost(postData))
     const data =await dispatch(getPosts())
 props.newPosts(data.payload)
 window.location.reload(false);
  }
  
  const clear = ()=>{
     setPostData({creator: '', title:'', message:'', tags:'',selectedFile:'' })
  }
 
  return (
    <Item key="12" elevation="12">
      <form autoComplete="off" onSubmit={handleSubmit}>
      <Item key="12" elevation="12"><Typography variant="h6">Upload your picture</Typography></Item>
       <TextField name="ceator" variant="outlined" label="Creator"  fullWidth  value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value})}/>
       <TextField name="title" variant="outlined" label="Title"  fullWidth  value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})}/>
       <TextField name="message" variant="outlined" label="Message"  fullWidth  value={postData.message} onChange={(e)=> setPostData({...postData, message: e.target.value})}/>
       <TextField name="tags" variant="outlined" label="Tags"  fullWidth  value={postData.tags} onChange={(e)=> setPostData({...postData, tags: e.target.value})}/>
       <div className="fileInput"> <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/></div>
       <Button variant="contained" color="primary" type="submit" fullWidth >Submit</Button>
       <Button variant="contained" color="secondary" onClick={clear} fullWidth >Clear</Button>

      </form>
    
  </Item>
  );
};

export default FormTest;