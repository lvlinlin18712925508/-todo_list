<template>
  <li @mouseenter="showBtn(true)" @mouseleave="showBtn(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="removeTodo">删除</button>
  </li>
</template>
<script>
export default {
    props: {
      todo: Object
    },
    data () {
      return {
        bgColor: 'white',
        isShow: false
      }
    },
    methods: {
      showBtn (isShow) {
        this.isShow = isShow
        this.bgColor = isShow ? '#aaaaaa' : 'white'
      },
      removeTodo () {
        var {todo} = this
        if(confirm(`确定删除${todo.name}吗?`)) {
          this.$store.dispatch('removeTodo', todo)
        }
      }
    }
}
</script>
<style>
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>