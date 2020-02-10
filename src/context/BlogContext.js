import React, { useReducer } from "react";
import createDataContext from './createDataContext';



const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
     console.log(state)
      return [...state, { title: `Blog post ${state.length + 1}` }];
    default:
      return state;
  }
};

  const addBlogPost = dispatch => {
      return () => {
        dispatch({ type: "add_blogpost" });
      }
  };

  export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost},
    []
  );