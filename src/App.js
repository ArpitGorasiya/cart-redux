import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;