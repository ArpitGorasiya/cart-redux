import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED,
    COMPLETE_ALL,
} from './actions';

const initialState = {
    todos: [],
    visibilityFilter: SHOW_ALL,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.payload.text,
                        completed: false,
                    },
                ],
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, text: action.payload.text }
                        : todo
                ),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            };
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case SHOW_ALL:
            return {
                ...state,
                visibilityFilter: SHOW_ALL,
            };
        case SHOW_ACTIVE:
            return {
                ...state,
                visibilityFilter: SHOW_ACTIVE,
            };
        case SHOW_COMPLETED:
            return {
                ...state,
                visibilityFilter: SHOW_COMPLETED,
            };
        case COMPLETE_ALL:
            const allCompleted = state.todos.every((todo) => todo.completed);
            return {
                ...state,
                todos: state.todos.map((todo) => ({
                    ...todo,
                    completed: !allCompleted,
                })),
            };
        default:
            return state;
    }
};

export default todoReducer;
