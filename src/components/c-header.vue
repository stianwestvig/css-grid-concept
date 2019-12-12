<template>
  <nav>
    <router-link to="/overview">Overview</router-link>
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
  color: gray

&.router-link-exact-active
  color: #42b983
</style>
