export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const COMPLETE_ALL = 'COMPLETE_ALL';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    text,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: {
    id,
  },
});

export const showAll = () => ({
  type: SHOW_ALL,
});

export const showActive = () => ({
  type: SHOW_ACTIVE,
});

export const showCompleted = () => ({
  type: SHOW_COMPLETED,
});

export const completeAll = () => ({
  type: COMPLETE_ALL,
});
