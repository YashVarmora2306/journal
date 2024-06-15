import React, { useState, useEffect } from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { Container,Grow, Grid } from "@mui/material";
import { StyledGrid } from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

const Home = () => {

    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    
  return (
    <Grow in>
      <Container>
        <StyledGrid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </StyledGrid>
      </Container>
    </Grow>
  );
}

export default Home;