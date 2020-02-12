import createDataContext from './createDataContext';


//  the reducer takes an action and returns a state
const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
    return state.filter((blogpost)=> blogpost.id !== action.payload )
    case "add_blogpost":
     
      return [
        ...state, 
        {id: Math.floor(Math.random() * 9999), 
          title: action.payload.title,
          content: action.payload.content 
        }
      ];
    default:
      return state;
  }
};
// Use async await to dispatch type and payload THEN call callback 
// after dispatch is finished. 
  const addBlogPost = dispatch => {
      return async (title, content, callback) => {
        await dispatch({ type: "add_blogpost", payload: {title: title, content: content} });
        callback()
      }
  };

  const deleteBlogPost = dispatch => {
    return (id) => {
      dispatch({ type: "delete_blogpost", payload: id });
    }
  }

  export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost},
    []
  );