<template>
  <ul class="todo-main">
    <item v-for="(todo, index) in todos" :todo="todo" :key="index"></item>
  </ul>
</template>
<script>
import item from './item.vue'
import {mapGetters} from 'vuex'
import localStorageUtils from '../util/localStorageUtils'
export default {
    mounted() {
        console.log('mounted', this.$store.state.todos)
    },
    watch: {
      todos: {
        deep: true,
        handler: localStorageUtils.saveTodos
      }
    },
    computed: {
        ...mapGetters(['todos'])
    },
    components: {
      item
    }
}
</script>
<style>
 .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>