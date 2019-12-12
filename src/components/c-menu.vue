<template>
  <nav>
    <img
      src="@/assets/logo.png"
      alt="logo"
      width="40"
    />
  </nav>
</template>

<script>
export default {
  name: 'CMenu'
}
</script>

<style lang="stylus" scoped>
$outer = 20px

nav
  height: "calc(100% - %s - %s)" % ($outer $outer)
  background-color: #070707
  padding: $outer

</style>
