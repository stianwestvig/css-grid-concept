<template>
  <ul>
    <li
      v-for="item in reversed"
      :key="item.id"
    >
      <span>{{ formatTime(item) }}</span>
      <span>{{ item.context.name }}</span>
      <span>{{ item.activity }}</span>
      <span>{{ item.context.code }}</span>
      <span>{{ item.context.org }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CActivityList',
  props: {
    items: Array
  },
  computed: {
    reversed () {
      return this.items.slice().reverse()
    }
  },
  methods: {
    formatTime (item) {
      const time = item.created
      const hour = `${time.getHours()}`.padStart(2, '0')
      const minutes = `${time.getMinutes()}`.padStart(2, '0')
      const seconds = `${time.getSeconds()}`.padStart(2, '0')
      return `${hour}:${minutes}:${seconds}`
    }
  }
}
</script>

<style lang="stylus" scoped>
  span {
    margin-right: 10px
  }
</style>
