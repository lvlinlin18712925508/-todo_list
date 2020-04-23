import {RECEIVE_TODOS, ADD_TODO, REMOVE_TODO, REMOVE_COMPLETED, UPDATE_ALL_TODOS} from './types'
export default {
    [RECEIVE_TODOS] (state, {todos}) {
        state.todos = todos
    },
    [ADD_TODO] (state, {todo}) {
        state.todos.unshift(todo)
    },
    [REMOVE_TODO](state, {todo}) {
        var index = state.todos.indexOf(todo)
        state.todos.splice(index, 1)
    },
    [REMOVE_COMPLETED](state){
        state.todos= state.todos.filter(todo => !todo.complete)
    },
    [UPDATE_ALL_TODOS](state, {complete}) {
        state.todos.forEach(todo => {
            todo.complete = complete
        });
    }
}