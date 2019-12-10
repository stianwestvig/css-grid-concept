<template>
  <div class="grid-container">
    <header class="grid-header">
      <c-header />
    </header>
    <main class="grid-content">
      <router-view/>
    </main>
    <aside class="grid-menu">
      <c-menu />
    </aside>
    <aside class="grid-aside"></aside>
  </div>
</template>

<script>
import CHeader from '@/components/c-header.vue'
import CMenu from '@/components/c-menu.vue'

export default {
  components: {
    CHeader,
    CMenu
  }
}
</script>

<style lang="stylus" scoped>
.grid-container
  display: grid
  grid-template-areas: "menu header header"\
                       "menu content aside"
  grid-template-columns: 80px 1fr 150px
  grid-template-rows: 80px\
                      1fr
  min-height: 100vh

.grid-header
  grid-area: header
.grid-content
  grid-area: content
  background-color: #545454
.grid-menu
  grid-area: menu
.grid-aside
  grid-area: aside

@media screen and (max-width: 600px)
  .grid-container
    grid-template-areas: "header"\
                         "menu"\
                         "content"\
                         "aside"
    grid-template-columns: 100%
    grid-template-rows: 100px\
                        50px\
                        1fr\
                        50px

</style>
