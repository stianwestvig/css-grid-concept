<template>
  <nav>
    <router-link to="/">Overview</router-link>
    <router-link to="/work">Work</router-link>
  </nav>
</template>

<script>
export default {
  name: 'CHeader'
}
</script>

<style lang="stylus" scoped>
nav
  display: flex
  align-items: center
  height: 100%
  background-color: #070707

a
  margin-right: 20px
  font-weight: bold
  text-decoration: none
  color: white

&.router-link-exact-active
  color: #e56399
</style>
