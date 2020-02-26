import React, { useReducer } from 'react';

// reducer actions and initial state as parameter
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  // The provider which returns context
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    // This add actions to boundactions object.
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    // Context provider
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
