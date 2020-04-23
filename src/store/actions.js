import localStorageUtils from '../util/localStorageUtils'

import {RECEIVE_TODOS, ADD_TODO, REMOVE_TODO, REMOVE_COMPLETED, UPDATE_ALL_TODOS} from './types'

export default {
    readTodos({commit}) {
        setTimeout(() => {
          const todos = localStorageUtils.readTodos()
          commit(RECEIVE_TODOS, {todos})
        }, 1000)
    },
    addTodo ({commit}, todo) {
        commit(ADD_TODO, {todo})
    },
    removeTodo({commit}, todo) {
        commit(REMOVE_TODO, {todo})
    },
    removeComplete({commit}) {
        commit(REMOVE_COMPLETED)
    },
    updateAllTodos ({commit}, complete) {
        commit(UPDATE_ALL_TODOS, {complete})
    }
}