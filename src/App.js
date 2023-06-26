// App.js
import React, { useEffect } from "react";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  selectPosts,
  selectError,
  selectLoading,
} from "./redux/postsSlice.js";
import {
  Container,
  Typography,
  CircularProgress,
  AppBar,
  Paper,
  Grid,
  List,
  Button,
} from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container sx={{ mt: "100px" }} className="app">
      <AppBar
        sx={{
          backgroundColor: "#494C13",
          height: "80px",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Demo App With Redux Toolkit & MUI-5
        </Typography>
      </AppBar>
      <Paper
        sx={{
          height: "auto",
          width: "110px",
          justifyContent: "center",
          backgroundColor: "blueviolet",
          marginLeft: "500px",
        }}
      >
        <Typography variant="h4" align="center">
          Posts
        </Typography>
      </Paper>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="body1" color="error" align="center">
          Error: {error}
        </Typography>
      ) : (
        <List>
          {posts.map((post) => (
            <Grid container spacing={2} lg={0} direction="column" key={post.id}>
              {/* ============================================================================================================ */}
              {/* <Grid item>
                <Typography variant="h5" color="skyblue" gutterBottom>
                  User ID: {post.id}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" color="black">
                  {post.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {post.body}
                </Typography>
              </Grid> */}
              {/* ======================================================================================================================== */}
              <Grid item>
                <Typography variant="h5" color="skyblue">
                  <Button variant="contained">User</Button>- {post.id}
                </Typography>
                <Typography variant="h5" color="black">
                  {post.title}
                </Typography>
                <Typography variant="body1">{post.body}</Typography>
              </Grid>
            </Grid>
          ))}
        </List>
      )}
    </Container>
  );
};

export default App;
