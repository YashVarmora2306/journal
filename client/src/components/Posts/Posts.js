import React from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import {StyledGrid} from "./styles";


const Posts = ({setCurrentId}) => {

  const {posts, isLoading} = useSelector((state) => state.posts);

  if(!posts.length && !isLoading) return 'No posts'

  return (
    isLoading ? <CircularProgress /> : (
      <StyledGrid container alignItems="stretch" spacing={3}>
        {
          posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          )
        )}
      </StyledGrid>
      )
  )
}

export default Posts;