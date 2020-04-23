
const TODOS_KEY = 'todos_key'
export default {
  readTodos () {// 如果没有数据, 返回[]
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  },

  saveTodos (todos) { // 先将todos转换为json再保存
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}