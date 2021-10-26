import * as api from '../API';

// Action creators
 export const getPosts = ()=> async (dispatch) =>{
   try {
       const { data } = await api.fetchPosts()
       const lo = dispatch({type: 'FETCH_ALL', payload:data});
       return lo

   } catch (error) {
       console.log(error.message)
   }
}

export const createPost = (post)=> async (dispatch) =>{
    try {
        const { data } = await api.createPost(post)
        dispatch({type: 'CREATE', payload:data});
 
    } catch (error) {
        console.log(error.message)
    }
 }

