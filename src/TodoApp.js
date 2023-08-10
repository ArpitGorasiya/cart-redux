import React from 'react';
import { connect } from 'react-redux';
import {
    addTodo,
    updateTodo,
    deleteTodo,
    completeTodo,
    showAll,
    showActive,
    showCompleted,
    completeAll,
} from './redux/actions';

class TodoApp extends React.Component {
    
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = {
    addTodo,
    updateTodo,
    deleteTodo,
    completeTodo,
    showAll,
    showActive,
    showCompleted,
    completeAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
