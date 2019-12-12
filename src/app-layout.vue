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
  min-height: 100vh
  grid-template-areas: "menu header"\
                       "menu content"
  grid-template-columns: 80px 1fr
  grid-template-rows: 80px\
                      1fr

@media screen and (max-width: 600px)
  .grid-container
    grid-template-areas: "header"\
                         "menu"\
                         "content"
    grid-template-columns: 100%
    grid-template-rows: 100px\
                        50px\
                        1fr

.grid-header
  grid-area: header
.grid-content
  grid-area: content
  background-color: #DCDCDD
  padding: 20px
.grid-menu
  grid-area: menu
.grid-aside
  grid-area: aside

</style>
